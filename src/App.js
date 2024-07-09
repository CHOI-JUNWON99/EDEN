import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import CompanyMessage from './components/CompanyMessage';
import './css/MainPage.css';
import CompanyHistory from './components/CompanyHistory';
import PatentsCertifications from './components/PatentsCertifications';
import RequestForm from './components/RequestForm';
import RaD from './components/RaD';
import Test from './components/Test';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';
import uploadImage from './components/uploadImage';
import NewsView from './components/NewsView';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CompanyMessage" element={<CompanyMessage />} />
          <Route path="/CompanyHistory" element={<CompanyHistory />} />
          <Route path="/PatentsCertifications" element={<PatentsCertifications />} />
          <Route path="/RequestForm" element={<RequestForm />} />
          <Route path="/RaD" element={<RaD />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/NewsList" element={<NewsList />} />
          <Route path="/AddNews" element={<AddNews />} />
          <Route path="/add-news" element={<AddNews />} />
          <Route path="/uploadImage" element={<uploadImage />} />
          <Route path="/news/:id" element={<NewsView />} /> {/* 추가된 부분 */}
          {/* 다른 페이지 라우트를 여기에 추가 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;