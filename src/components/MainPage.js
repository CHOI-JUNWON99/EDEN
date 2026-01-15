import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import '../css/MainPage.css';
import { useTranslation } from 'react-i18next';

// 카운터 애니메이션 컴포넌트
function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function MainPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // 서비스 데이터 정의
  const services = [
    {
      title: 'WATER',
      items: [
        { label: '수처리시설 설계', path: '/WaterDesign' },
        { label: '수처리시설 시공', path: '/WaterConstruction' },
        { label: '수처리시설 관리', path: '/WaterManagement' },
      ]
    },
    {
      title: 'AIR',
      items: [
        { label: '대기오염 방지시설 설계', path: '/AirDesign' },
        { label: '대기오염 방지시설 시공', path: '/AirConstruction' },
        { label: '대기오염 방지시설 관리', path: '/AirManagement' },
      ]
    },
    {
      title: 'CONSTRUCTION',
      items: [
        { label: '토목공사업', path: '/Construction' },
        { label: '상하수도설비공사업', path: '/WaterSewerage' },
        { label: '기계설비공사업', path: '/MechanicalEquipment' },
      ]
    }
  ];

  return (
    <div className="main-page">
      <section className="hero-video-section">
        <ReactPlayer
          url={`${process.env.PUBLIC_URL}/EDEN_1080.mp4`}
          width="100%"
          height="100%"
          playing={true}
          loop
          muted={true}
          playsinline={true}
          className="hero-video-player"
        />
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <div className="vision-text">
          <p>{t('㈜에덴은 지구환경이 에덴동산과 같이 아름답고 살기에 좋은 환경이 되는 비전을 가지고')}</p>
          <p>{t('우리에게 주어진 능력과 사명으로 최적의 환경서비스를 제공하도록 노력하겠습니다.')}</p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number"><Counter end={new Date().getFullYear() - 2002} suffix={t('년')} /></div>
            <div className="stat-label">{t('업력')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><Counter end={28} suffix={t('개')} /></div>
            <div className="stat-label">{t('특허 및 인증')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><Counter end={100} suffix="+" /></div>
            <div className="stat-label">{t('완료 프로젝트')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><Counter end={10} suffix="+" /></div>
            <div className="stat-label">{t('기술협약')}</div>
          </div>
        </div>

        <div className="vision-text">
          <p>{t('㈜에덴은 환경분야에서 오랜 업력을 바탕으로 많은 경험과 신기술 특허를 보유하여 기술성과 전문성을 인정받은 회사입니다.')}</p>
          <p>{t('미래 세대가 안전하고 깨끗한 환경에서 생활하도록 기여하는 회사로 발전할 것입니다.')}</p>
        </div>
      </section>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-row" key={service.title}>
              <h6 className="service-title">{service.title}</h6>
              <div className="service-buttons">
                {service.items.map((item) => (
                  <Button
                    key={item.path}
                    variant="contained"
                    className="service-button"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {t(item.label)}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
        <section className="locations-section">
          <h2>Our Locations</h2>
          <div className="locations-grid">
            <div className="location-card">
              <div className="h8">Seoul Office</div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.280613254087!2d127.11961092719552!3d37.47770392921481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5320ee8eca3%3A0xba804017bfd61afb!2zKOyjvCnsl5DrjbQ!5e0!3m2!1sko!2skr!4v1721479790107!5m2!1sko!2skr"
                  allowFullScreen=""
                  loading="lazy"
                  title="Seoul Office Location Map"
                ></iframe>
              </div>
              <p>{t('서울특별시 송파구 충민로 52, 가든파이브웍스 D동 607호')}</p>
              <p>T. 02-2047-0987~8</p>
              <p>F. 02-2047-0989</p>
              <p>E. edenep@naver.com</p>
            </div>
            <div className="location-card">
              <div className="h8">Pyeongtaek Factory</div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.714881072921!2d127.01867707718695!3d37.11190395006489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3f3e62240b01%3A0x1b49202d3c918d76!2z6rK96riw64-EIO2Pie2DneyLnCDshJztg4TrqbQg66eI65GQMeq4uCAxNzAtMzg!5e0!3m2!1sko!2skr!4v1721479920123!5m2!1sko!2skr"
                  allowFullScreen=""
                  loading="lazy"
                  title="Pyeongtaek Factory Location Map"
                ></iframe>
              </div>
              <p>{t('경기도 평택시 서탄면 마두1길 170-38, 1동')}</p>
              <p>T. 031-667-0983</p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default MainPage;
