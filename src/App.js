import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import CompanyMessage from './components/CompanyMessage';
import './css/MainPage.css';
import CompanyHistory from './components/CompanyHistory';
import PatentsCertifications from './components/PatentsCertifications';

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
          {/* 다른 페이지 라우트를 여기에 추가 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
