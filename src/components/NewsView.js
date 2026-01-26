import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc, increment, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { db } from './firebase';
import { Button } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../css/News.css';

// 뉴스 상세 fetch 함수
const fetchNewsDetail = async (id) => {
  const docRef = doc(db, 'news', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  throw new Error('뉴스를 찾을 수 없습니다.');
};

const NewsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [likes, setLikes] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const textareaRef = useRef(null);
  const viewCountedRef = useRef(false);
  const previewLength = 200;

  // React Query로 뉴스 상세 조회
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news', id],
    queryFn: () => fetchNewsDetail(id),
  });

  // 뉴스 데이터가 로드되면 상태 초기화 및 조회수 증가
  useEffect(() => {
    if (news) {
      setLikes(news.likes);
      setEditedContent(news.content);
      setEditedTitle(news.title);
      // 조회수 증가 (최초 로드 시에만)
      if (!viewCountedRef.current) {
        viewCountedRef.current = true;
        const docRef = doc(db, 'news', id);
        updateDoc(docRef, { views: increment(1) });
      }
    }
  }, [news, id]);

  const handleLike = async () => {
    const docRef = doc(db, 'news', id);
    await updateDoc(docRef, { likes: increment(1) });
    setLikes(likes + 1);
  };

  const handleDelete = async () => {
    const passwordPrompt = prompt('비밀번호를 입력하세요:');
    if (passwordPrompt === news.password) {
      await deleteDoc(doc(db, 'news', id));
      alert('게시물이 삭제되었습니다.');
      navigate('/NewsList');
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleUpdate = async () => {
    const passwordPrompt = prompt('비밀번호를 입력하세요:');
    if (passwordPrompt === news.password) {
      setEditMode(true);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleSave = async () => {
    const docRef = doc(db, 'news', id);
    const updatedContent = editedContent;
    const mainImage = (updatedContent.match(/!\[image\]\((.*?)\)/) || [])[1] || '';

    await updateDoc(docRef, {
      title: editedTitle,
      content: updatedContent,
      main_image: mainImage,
      updated_at: Timestamp.fromDate(new Date())
    });

    // React Query 캐시 업데이트
    queryClient.setQueryData(['news', id], (prev) => ({
      ...prev,
      title: editedTitle,
      content: updatedContent,
      main_image: mainImage
    }));
    // 목록 캐시도 무효화
    queryClient.invalidateQueries({ queryKey: ['news'] });
    setEditMode(false);
    alert('게시물이 성공적으로 수정되었습니다.');
  };

  const handlePaste = async (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const imageUrl = await uploadImage(file);
          const cursorPosition = textareaRef.current.selectionStart;
          const textBeforeCursor = editedContent.substring(0, cursorPosition);
          const textAfterCursor = editedContent.substring(cursorPosition);
          setEditedContent(`${textBeforeCursor}\n![image](${imageUrl})\n${textAfterCursor}`);
        }
      }
    }
  };

  const uploadImage = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error uploading image: ', error);
      return '';
    }
  };

  const renderPreviewContent = (content, length) => {
    // 이미지 URL을 제거하고 글자를 제한하는 로직
    let preview = content;
    const imageRegex = /!\[image\]\((.*?)\)/;
    const imageMatch = content.match(imageRegex);

    if (imageMatch) {
      preview = content.replace(imageRegex, '');
      if (preview.length > length) {
        preview = preview.slice(0, length) + '...';
      }
      preview = `![image](${imageMatch[1]})\n\n${preview}`;
    } else {
      if (content.length > length) {
        preview = content.slice(0, length) + '...';
      }
    }

    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img {...props} alt="content" style={{ maxWidth: '100%' }} />
            </div>
          ),
        }}
      >
        {preview}
      </ReactMarkdown>
    );
  };

  if (isLoading) return <div className="news-view-container"><p>로딩 중...</p></div>;
  if (error) return <div className="news-view-container"><p>에러: {error.message}</p></div>;

  return (
    <div className="news-view-container">
      {news && (
        <>
          {editMode ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="edit-title-input"
              />
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                onPaste={handlePaste}
                className="edit-content-textarea"
                ref={textareaRef}
              />
              <div className="content-preview" style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                {renderPreviewContent(editedContent, previewLength)}
              </div>
              <Button color="inherit" onClick={handleSave}>저장</Button>
              <Button color="inherit" onClick={() => setEditMode(false)}>취소</Button>
            </>
          ) : (
            <>
              <h2 className="news-title">{news.title}</h2>
              <div className="news-info-box">
                <p>작성자: {news.author}</p>
                <p>작성일: {new Date(news.created_at.seconds * 1000).toLocaleString()}</p>
                <p>조회수: {news.views}</p>
                <p>추천수: {likes}</p>
              </div>
              <div className="content" style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  components={{
                    img: ({ node, ...props }) => (
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img {...props} alt="content" style={{ maxWidth: '100%' }} />
                      </div>
                    )
                  }}>
                  {news.content}
                </ReactMarkdown>
              </div>
              <div className="buttons-container">
                <Button color="inherit" component={Link} to="/NewsList">목록보기</Button>
                <Button color="inherit" onClick={handleLike}>추천</Button>
                <Button color="inherit" onClick={handleUpdate}>수정</Button>
                <Button color="inherit" onClick={handleDelete}>삭제</Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NewsView;
