import React from 'react';
import { Container } from '@mui/material';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer-text">
          Tel: 02-2047-0987~8 | Fax: 02-2047-0989 | Email: edenep@naver.com 
          <span className="admin-link">
            <Link to="/admin">관리자</Link>
          </span>
        </p>
        <p className="footer-text">본사: 서울특별시 송파구 충민로 52, 가든파이브웍스 D동 607호 | 연구소: 경기도 평택시 서탄면 마두1길 170-38, 1동</p>
      </Container>
    </footer>
  );
}

export default Footer;
