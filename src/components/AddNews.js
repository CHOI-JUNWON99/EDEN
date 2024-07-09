import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { uploadImage } from '../components/uploadImage'; // 수정된 파일 임포트
import '../css/News.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handlePaste = async (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const imageUrl = await uploadImage(file);
          setImages((prevImages) => [...prevImages, imageUrl]);
          setContent((prevContent) => `${prevContent}\n![image](${imageUrl})\n`);
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
    <div className="add-news-container">
      <h2>뉴스 추가하기</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="textarea-main"
      />
      <input
        type="text"
        placeholder="작성자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="textarea-main"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="textarea-main"
      />
      <textarea
        placeholder="내용(이미지 첨부 시 첫번째 이미지가 메인 이미지로 설정됩니다.)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onPaste={handlePaste}
        className="textarea-content"
      />
      <Grid item>
        <Button onClick={handleAddNews} className="button">글쓰기</Button>
      </Grid>
    </div>
  );
};

export default AddNews;