import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Water.css';

function AirManagement() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>{t('대기오염 방지시설 관리')}</h2>
        <p>{t('㈜에덴은 대기오염 방지시설의 효율적이고 지속 가능한 운영을 위해')}<br />{t('체계적인 관리 서비스를 제공합니다. 정기적인 점검, 유지보수 및 문제 해결을 포함하여')}<br />{t('고객의 대기오염 방지시설이 항상 최상의 상태를 유지할 수 있도록 지원합니다.')}</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <img src="/MainPageOurService/air3-1.webp" alt={t('정기적인 점검 및 유지보수')} className="image"/>
          <p>{t('정기적인 점검 및 유지보수')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/air3-2.webp" alt={t('신속한 문제 해결')} className="image"/>
          <p>{t('신속한 문제 해결')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/air3-3.webp" alt={t('운영 효율성 극대화')} className="image"/>
          <p>{t('운영 효율성 극대화')}</p>
        </div>
        <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt={t('고객 맞춤형 관리 서비스')} className="image"/>
          <p>{t('고객 맞춤형 관리 서비스')}</p>
        </div>
      </section>
    </div>
   );
}

export default AirManagement;
