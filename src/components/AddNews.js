import React, { useState, useRef } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { uploadImage } from '../components/uploadImage';
import '../css/News.css';
import { useNavigate, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const textareaRef = useRef(null);

  const handlePaste = async (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const imageUrl = await uploadImage(file);
          const cursorPosition = textareaRef.current.selectionStart;
          const textBeforeCursor = content.substring(0, cursorPosition);
          const textAfterCursor = content.substring(cursorPosition);
          setImages((prevImages) => [...prevImages, imageUrl]);
          setContent(`${textBeforeCursor}\n![image](${imageUrl})\n${textAfterCursor}`);
        }
      }
    }
  };

  const handleAddNews = async () => {
    if (!title || !author || !password || !content) {
      alert('모든 필드를 작성해 주세요.');
      return;
    }

    try {
      const mainImage = images.length > 0 ? images[0] : '';

      await addDoc(collection(db, 'news'), {
        title,
        author,
        password,
        content,
        created_at: Timestamp.fromDate(new Date()),
        likes: 0,
        main_image: mainImage,
        additional_images: images.slice(1),
        preview: content.slice(0, 100), // 내용의 앞부분을 미리보기로 사용
        updated_at: Timestamp.fromDate(new Date()),
        views: 0,
      });

      alert('뉴스가 성공적으로 추가되었습니다.');
      navigate('/NewsList'); // NewsList로 이동
    } catch (error) {
      console.error('Error adding news: ', error);
    }
  };

  return (
    <div className="news-view-container">
      <h2>뉴스 추가하기</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="edit-title-input"
      />
      <input
        type="text"
        placeholder="작성자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="edit-title-input"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="edit-title-input"
      />
      <textarea
        placeholder="내용(이미지 첨부 시 첫번째 이미지가 메인 이미지로 설정됩니다.)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onPaste={handlePaste}
        className="edit-content-textarea"
        ref={textareaRef}
      />
      <div className="content-preview" style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img {...props} alt="content" className="content-img" />
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      <div className="buttons-container">
      <Button color="inherit" onClick={handleAddNews}>저장</Button>
      <Button color="inherit" component={Link} to="/NewsList">취소</Button>
      </div>
    </div>
  );
};

export default AddNews;
