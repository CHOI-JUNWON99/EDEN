import React from 'react';
import { Grid, Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import '../css/MainPage.css';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="main-page">
      <section className="hero-section" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/MainPage2.png'})`,
        width: '100%',
        height: '1000px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h4 className="hero-text">
          {t('에덴동산과 같은 최적의 환경을 이 땅에 ㈜에덴이 만듭니다')}<br />
        </h4>
      </section>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div className="services-grid">
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <h6>WATER</h6>
            </Grid>
            <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/WaterDesign')}>{t('수처리시설 설계')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/WaterConstruction')}>{t('수처리시설 시공')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/WaterManagement')}>{t('수처리시설 관리')}</Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <h6>AIR</h6>
            </Grid>
            <div>ㅤㅤㅤㅤㅤㅤㅤㅤㅤ</div>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/AirDesign')}>{t('대기오염 방지시설 설계')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/AirConstruction')}>{t('대기오염 방지시설 시공')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/AirManagement')}>{t('대기오염 방지시설 관리')}</Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <h6>CONSTRUCTION</h6>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/Construction')}>{t('토목공사업')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/WaterSewerage')}>{t('상하수도설비공사업')}</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="service-button" onClick={() => handleNavigation('/MechanicalEquipment')}>{t('기계설비공사업')}</Button>
            </Grid>
          </Grid>
          <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
          <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
          <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        </div>
      </div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <h2>Our Vision</h2>
          <h6>{t('㈜에덴은  지구환경이 에덴동산과 같이 아름답고 살기에 좋은 환경이 되는 비전을 가지고')}</h6> 
          <h6>{t('우리에게 주어진 능력과 사명으로 최적의 환경서비스를 제공하도록 노력하겠습니다.')}</h6>
        <section className="vision-section">
          <div className="vision-video">
          <ReactPlayer 
            url={`${process.env.PUBLIC_URL}/EDEN_1080.mp4`} 
            controls 
            width="100%" 
            height="auto" 
            backgroundSize= "cover"
            backgroundPosition= "center"
            playing={true}  // 자동 재생 설정
            loop 
            muted={true}    // 자동 재생 시 음소거
          />
          </div>
        </section>
        <h6>{t('㈜에덴은 환경분야에서 오랜 업력을 바탕으로 많은 경험과 신기술 특허를 보유하여 기술성과 전문성을 인정받은 회사입니다.')}</h6>
        <h6>{t('미래 세대가 안전하고 깨끗한 환경에서 생활하도록 기여하는 회사로 발전할 것입니다.')}</h6>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <section className="locations-section">
          <h2>Our Locations</h2>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
            <div className="h8">Seoul Office</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.280613254087!2d127.11961092719552!3d37.47770392921481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5320ee8eca3%3A0xba804017bfd61afb!2zKOyjvCnsl5DrjbQ!5e0!3m2!1sko!2skr!4v1721479790107!5m2!1sko!2skr"
                width="450"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Seoul Office Location Map"
              ></iframe>
              <p>{t('서울특별시 송파구 충민로 52, 가든파이브웍스 D동 607호')}</p>
              <p>T. 02-2047-0987~8</p>
              <p>F. 02-2047-0989</p>
              <p>E. edenep@naver.com</p>
            </Grid>
            <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
            <Grid item>
            <div className="h8">Pyeongtaek Factory</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.714881072921!2d127.01867707718695!3d37.11190395006489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3f3e62240b01%3A0x1b49202d3c918d76!2z6rK96riw64-EIO2Pie2DneyLnCDshJztg4TrqbQg66eI65GQMeq4uCAxNzAtMzg!5e0!3m2!1sko!2skr!4v1721479920123!5m2!1sko!2skr"
                width="450"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Pyeongtaek Factory Location Map"
              ></iframe>
              <p>{t('경기도 평택시 서탄면 마두1길 170-38, 1동')}</p>
              <p>T. 031-667-0983</p>
            </Grid>
          </Grid>
        </section>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
        <div>ㅤㅤㅤㅤㅤㅤㅤ</div>
    </div>
  );
}

export default MainPage;
