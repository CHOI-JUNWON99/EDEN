import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Water.css';

function MechanicalEquipment() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>{t('기계설비공사업')}</h2>
        <p>{t('㈜에덴은 기계설비공사업에서 고품질의 설비 시공 서비스를 제공합니다.')}<br />{t('우리는 최신 기계 설비 기술을 바탕으로 안정적이고 효율적인 설비를 구축하여')}<br />{t('고객의 생산성과 효율성을 향상시킵니다.')}</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt={t('최신 기계 설비 기술 적용')} className="image" />
          <p>{t('최신 기계 설비 기술 적용')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt={t('안정적이고 효율적인 설비 구축')} className="image" />
          <p>{t('안정적이고 효율적인 설비 구축')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt={t('철저한 현장 관리')} className="image" />
          <p>{t('철저한 현장 관리')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt={t('고객 맞춤형 시공 서비스')} className="image" />
          <p>{t('고객 맞춤형 시공 서비스')}</p>
        </div>
      </section>
      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
        <h2>{t('공사 실적')}</h2>
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div className="company-message">
        <img src={process.env.PUBLIC_URL + '/Mechanical.webp'} alt={t('Company Message')} className="company-message-image" />
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default MechanicalEquipment;
