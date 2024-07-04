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
              <img src="/Company.logo.jpg" alt="Company Logo" />
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
                  <Link to="/technology/field1">수질</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/field1/EmSbr">EM-SBR</Link>
                    <Link to="/technology/field1/EmMbr">EM-MBR</Link>
                    <Link to="/technology/field1/EmNprs">EM-NPRS</Link>
                    <Link to="/technology/field1/EmPwt">EM-PWT</Link>
                  </div>
                </div>
                <div className="navbar-subitem">
                  <Link to="/technology/field2">대기</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/field2/BioFilter">BIOFILTER</Link>
                    <Link to="/technology/field2/MultyScrubber">MULTY SCRUBBER</Link>
                    <Link to="/technology/field2/Srs">SRS</Link>
                    <Link to="/technology/field2/Tos">TOS</Link>
                  </div>
                </div>
                <div className="navbar-subitem">
                  <Link to="/technology/field3">제품소개</Link>
                  <div className="navbar-subdropdown">
                    <Link to="/technology/field3/DrumScreen">DRUM SCREEN</Link>
                    <Link to="/technology/field3/UvSterilizer">UV소독기</Link>
                    <Link to="/technology/field3/ElectricPrecipitator">전기집진기</Link>
                    <Link to="/technology/field3/LinkConveyor">링크 컨베이어</Link>
                    <Link to="/technology/field3/PostTreatmentFilter">후처리필터</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <Button color="inherit">R&D</Button>
            </div>
            <div className="navbar-item">
              <Button color="inherit">환경뉴스</Button>
            </div>
            <div className="navbar-item">
              <Button color="inherit">견적의뢰</Button>
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