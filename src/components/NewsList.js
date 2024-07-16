import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import '../css/News.css';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6); // 아래에 표시될 뉴스의 수
  const [latestPreviewLength] = useState(515); // latest preview 길이 조절
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      const q = query(collection(db, 'news'), orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      const newsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    };

    fetchNews();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews + 1, indexOfLastNews + 1); // +1 to skip the latest news

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddNewsClick = () => {
    navigate('/add-news');
  };

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`);
  };

  const getPreviewText = (content, length) => {
    const imageRegex = /!\[image\]\((.*?)\)/g;
    let preview = content.replace(imageRegex, '');
    if (preview.length > length) {
      preview = preview.slice(0, length) + '...';
    }
    return preview;
  };

  return (
    <div className="news-container">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/News6.webp'})`,
          width: '100%',
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h1>환경 뉴스</h1>
      </section>
      <div className="search-and-add">
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={handleAddNewsClick} className="add-news-button">글쓰기</button>
      </div>
      {filteredNews.length > 0 && (
        <div className="latest-news" onClick={() => handleNewsClick(filteredNews[0].id)}>
          <div className="latest-news-content">
            <img 
              src={filteredNews[0].main_image || `${process.env.PUBLIC_URL}/EdenWhite.webp`} 
              alt={filteredNews[0].title} 
              className="latest-news-image" 
            />
            <div className="latest-news-text">
              <h2>{filteredNews[0].title}</h2>
              <p>{getPreviewText(filteredNews[0].content, latestPreviewLength)}</p>
              <div className="latest-news-info">
                <p>추천수: {filteredNews[0].likes}</p>
                <p>작성자: {filteredNews[0].author}</p>
              </div>
              <div className="latest-news-info">
                <p>조회수: {filteredNews[0].views}</p>
                <p>작성일: {new Date(filteredNews[0].created_at.seconds * 1000).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="news-grid">
        {currentNews.map((article) => (
          <div key={article.id} className="news-item" onClick={() => handleNewsClick(article.id)}>
            <img 
              src={article.main_image || `${process.env.PUBLIC_URL}/EdenWhite.webp`} 
              alt={article.title} 
            />
            <h3>{article.title}</h3>
            <p>{getPreviewText(article.content, 105)}</p>
            <div className="news-info">
              <p>추천수: {article.likes}</p>
              <p>작성자: {article.author}</p>
            </div>
            <div className="news-info">
              <p>조회수: {article.views}</p>
              <p>작성일: {new Date(article.created_at.seconds * 1000).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil((filteredNews.length - 1) / newsPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
};

export default NewsList;
