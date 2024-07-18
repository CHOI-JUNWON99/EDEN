import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Water.css';

function Construction() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>{t('토목공사업')}</h2>
        <p>{t('㈜에덴은 토목공사업에서 다년간의 경험과 전문성을 보유하고 있습니다.')}<br />{t('우리는 고품질의 토목공사 서비스를 제공하여 인프라 개선 및 도시 개발에 기여합니다.')}</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <img src="/MainPageOurService/3-1-1.webp" alt={t('인프라 개선')} className="image" />
          <p>{t('인프라 개선')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/3-1-2.webp" alt={t('도시 개발 지원')} className="image" />
          <p>{t('도시 개발 지원')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/3-1-3.webp" alt={t('최신 토목 기술 적용')} className="image" />
          <p>{t('철저한 현장 관리')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/3-1-4.webp" alt={t('환경 친화적 시공 방법')} className="image" />
          <p>{t('효율적이고 경제적인 설계')}</p>
        </div>
      </section>
      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
        <h2>{t('공사 실적')}</h2>
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div className="company-message">
        <img src={process.env.PUBLIC_URL + '/Construction.webp'} alt='Company Message' className="company-message-image" />
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default Construction;
