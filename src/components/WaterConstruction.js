import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Water.css';

function WaterDesign() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>{t('수처리시설 시공')}</h2>
        <p>{t('㈜에덴은 고품질의 수처리시설 시공 서비스를 제공합니다.')}<br />{t('우리의 전문 팀은 철저한 현장 관리와 시공 기술을 통해')}<br />{t('안정적이고 지속 가능한 수처리시설을 구축합니다.')}</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <img src="/MainPageOurService/water2-1.webp" alt={t('철저한 현장 관리')} className="image"/>
          <p>{t('철저한 현장 관리')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water2-2.webp" alt={t('최신 시공 기술 적용')} className="image"/>
          <p>{t('최신 시공 기술 적용')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water2-3.webp" alt={t('환경 친화적 시공 방법')} className="image"/>
          <p>{t('환경 친화적 시공 방법')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water2-4.webp" alt={t('고객 맞춤형 시공 서비스')} className="image"/>
          <p>{t('고객 맞춤형 시공 서비스')}</p>
        </div>
      </section>
    </div>
  );
}

export default WaterDesign;
