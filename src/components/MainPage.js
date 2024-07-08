import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import ReactPlayer from 'react-player';
import '../css/MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <section className="hero-section" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/MainPage1.png'})`,
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </section>
      <Container>
        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>㈜에덴은  지구환경이 에덴동산과 같이 아름답고 살기에 좋은 환경이 되는 비전을 가지고</p> 
          <p>우리에게 주어진 능력과 사명으로 최적의 환경서비스를 제공하도록 노력하겠습니다.</p>
          <div className="vision-video">
              <ReactPlayer 
                url={`${process.env.PUBLIC_URL}/EDEN_1080.mp4`} 
                controls 
                width="1100px" 
                height="700px" 
                playing 
                loop 
              />
          </div>
          <p>㈜에덴은 환경분야에서 오랜 업력을 바탕으로 많은 경험과 신기술 특허를 보유하여 기술성과 전문성을 인정받은 회사입니다.</p>
          <p>미래 세대가 안전하고 깨끗한 환경에서 생활하도록 기여하는 회사로 발전할 것입니다.</p>
        </section>
        <section className="services-section">
          <h2>Our Services</h2>
          <div>ㅤ</div>
          <Grid container spacing={2} justifyContent="center">
            <div>ㅤㅤㅤㅤ</div>
            <h6>WATER</h6>
            <div>ㅤㅤㅤ</div>
            <Grid item>
              <Button variant="contained" className="service-button">수처리시설 설계</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">수처리시설 시공</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">수처리시설 관리</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <div>ㅤㅤㅤㅤㅤ</div>
            <h6>AIR</h6>
            <div>ㅤㅤㅤㅤ</div>
            <Grid item>
              <Button variant="contained" className="service-button">대기오염 방지시설 설계</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">대기오염 방지시설 시공</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">대기오염 방지시설 관리</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <h6>CONSTRUCTION</h6>
            <Grid item>
              <Button variant="contained" className="service-button">토목공사업</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">상하수도설비공사업</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button">기계설비공사업</Button>
            </Grid>
          </Grid>
        </section>
        <section className="locations-section">
          <h2>Our Locations</h2>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
            <div className="h8">Seoul Office</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.749786719616!2d127.12020731530824!3d37.47963457981461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca58fb21526df%3A0x5d9d39e7d93f6049!2z7ISc7Jq47Yq567OE7Iuc6rOg64yA6rK96ri4IOqwnOumrOygleu5hOq4sA!5e0!3m2!1sko!2skr!4v1690275741836!5m2!1sko!2skr"
                width="450"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <p>서울특별시 송파구 충민로 52, 가든파이브웍스 D동 607호</p>
              <p>T. 02-2047-0987~8</p>
              <p>F. 02-2047-0989</p>
              <p>E. edenep@naver.com</p>
            </Grid>
            <Grid item>
            <div className="h8">Pyeongtaek Factory</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.216681857155!2d127.010961415309!3d37.45051597981853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca46f6b7d3c67%3A0xa99da56ef5b8e93!2z7ISc7Jq47Yq567OE7Iuc6rOg64yA64yA7J6lIOq0gOyGjCDrtoDrtoDsnbQg6rCA7YOd7J2Y!5e0!3m2!1sko!2skr!4v1690275781305!5m2!1sko!2skr"
                width="450"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <p>경기도 평택시 서탄면 마두1길 170-38, 1동</p>
              <p>T. 031-667-0983</p>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
}

export default MainPage;
