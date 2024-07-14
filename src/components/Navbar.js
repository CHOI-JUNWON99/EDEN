import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <AppBar position="static" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img src="/eden_front.png" alt="Company Logo" />
            </Link>
            <Link to="/" className="navbar-logo1">
              <img src="/EDEN.logo.png" alt="Company Logo" />
            </Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-item">
              <Button color="inherit">회사소개</Button>
              <div className="navbar-dropdown">
                <Link to="/CompanyMessage">인사말</Link>
                <Link to="/CompanyHistory">회사연혁</Link>
                <Link to="/PatentsCertifications">특허 및 인증서</Link>
              </div>
            </div>
            <div className="navbar-item">
              <Button color="inherit">기술분야</Button>
              <div className="navbar-dropdown">
                <div className="navbar-subitem">
                  <Link to="/WaterQuality">수질</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/F1/EmSbr">EM-SBR</Link>
                    <Link to="/technology/F1/EmMbr">EM-MBR</Link>
                    <Link to="/technology/F1/EmNprs">EM-NPRS</Link>
                    <Link to="/technology/F1/EmPwt">EM-PWT</Link>
                  </div>
                </div>
                <div className="navbar-subitem">
                  <Link to="/Atmosphere">대기</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/F2/BioFilter">BIOFILTER</Link>
                    <Link to="/technology/F2/MultyScrubber">MULTY SCRUBBER</Link>
                    <Link to="/technology/F2/Srs">SRS</Link>
                    <Link to="/technology/F2/Tos">TOS</Link>
                  </div>
                </div>
                <div className="navbar-subitem">
                  <Link to="/technology/F3/DrumScreen">제품소개</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/F3/DrumScreen">DRUM SCREEN</Link>
                    <Link to="/technology/F3/UvSystem">UV소독기</Link>
                    <Link to="/technology/F3/Electric">전기집진기</Link>
                    <Link to="/technology/F3/Link">링크 컨베이어</Link>
                    <Link to="/technology/F3/PostTreat">후처리필터</Link>
                  </div>
                </div>
                <div className="navbar-subitem">
                  <Link to="/NavConstruction">토목공사</Link>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <Button color="inherit" component={Link} to="/RaD">R&D</Button>
            </div>
            <div className="navbar-item">
              <Button color="inherit" component={Link} to="/NewsList">환경뉴스</Button>
            </div>
            <div className="navbar-item">
              <Button color="inherit" component={Link} to="/RequestForm">견적의뢰</Button>
            </div>
          </div>
          <div className="navbar-right">
            <Button color="inherit" component={Link} to="/en">EN</Button>
            <Button color="inherit" component={Link} to="/cn">中文</Button>
            <Button color="inherit" component={Link} to="/ko">한국어</Button>
            <div>ㅤ</div>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default Navbar;