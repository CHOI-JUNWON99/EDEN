import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc, increment, collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { Button } from '@mui/material';
import '../css/News.css';

const NewsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const [commentPassword, setCommentPassword] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      const docRef = doc(db, 'news', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (isMounted) {
          setNews(docSnap.data());
          setLikes(docSnap.data().likes);
          setEditTitle(docSnap.data().title);
          setEditContent(docSnap.data().content);
          await updateDoc(docRef, { views: increment(1) });
        }
      }
    };

    const fetchComments = async () => {
      const commentsRef = collection(db, 'news', id, 'comments');
      const commentsSnapshot = await getDocs(commentsRef);
      const commentsList = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (isMounted) {
        setComments(commentsList);
      }
    };

    fetchNews();
    fetchComments();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleLike = async () => {
    const docRef = doc(db, 'news', id);
    await updateDoc(docRef, { likes: increment(1) });
    setLikes(likes + 1);
  };

  const handleCommentSubmit = async () => {
    if (comment.trim() && commentPassword.trim()) {
      const commentsRef = collection(db, 'news', id, 'comments');
      await addDoc(commentsRef, { text: comment, password: commentPassword, created_at: new Date(), deleted: false });
      setComments([...comments, { id: (await getDocs(commentsRef)).docs.at(-1).id, text: comment, password: commentPassword, created_at: new Date(), deleted: false }]);
      setComment('');
      setCommentPassword('');
    }
  };

  const handleCommentDelete = async (commentId, commentPassword) => {
    const inputPassword = prompt('댓글 비밀번호를 입력하세요:');
    if (inputPassword === commentPassword) {
      const commentRef = doc(db, 'news', id, 'comments', commentId);
      await updateDoc(commentRef, { deleted: true });
      setComments(comments.map(comment => comment.id === commentId ? { ...comment, deleted: true } : comment));
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
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
      setIsEditing(true);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleSaveUpdate = async () => {
    if (editTitle.trim() && editContent.trim()) {
      const docRef = doc(db, 'news', id);
      await updateDoc(docRef, {
        title: editTitle,
        content: editContent,
        updated_at: Timestamp.fromDate(new Date())
      });
      setNews({
        ...news,
        title: editTitle,
        content: editContent,
        updated_at: Timestamp.fromDate(new Date())
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="news-view-container">
      {news && (
        <>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="textarea-main"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="textarea-content"
              />
              <Button onClick={handleSaveUpdate}>저장</Button>
              <Button onClick={() => setIsEditing(false)}>취소</Button>
            </>
          ) : (
            <>
              <h2 className="news-title">{news.title}</h2>
              <div className="news-info-box">
                <p>작성자: {news.author}</p>
                <p>작성일: {new Date(news.created_at.seconds * 1000).toLocaleString()}</p>
                <p>조회수: {news.views}</p>
                <p>추천수: {likes}</p>
                <p>댓글수: {comments.length}</p>
              </div>
              <div className="content" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: news.content }} />
              <div className="buttons-container">
                <Button color="inherit" component={Link} to="/NewsList">목록보기</Button>
                <Button color="inherit" onClick={handleLike}>추천</Button>
                <Button color="inherit" onClick={handleUpdate}>수정</Button>
                <Button color="inherit" onClick={handleDelete}>삭제</Button>
              </div>
            </>
          )}
          <div className="comments-section">
            <h3>댓글</h3>
            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  {comment.deleted ? '삭제된 메시지입니다' : comment.text}
                  {!comment.deleted && (
                    <button onClick={() => handleCommentDelete(comment.id, comment.password)}>삭제</button>
                  )}
                </div>
              ))}
            </div>
            <textarea
              placeholder="댓글을 입력하세요..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <input
              type="password"
              placeholder="댓글 비밀번호"
              value={commentPassword}
              onChange={(e) => setCommentPassword(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>댓글 등록</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsView;
