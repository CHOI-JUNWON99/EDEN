import React from 'react';
import '../css/MainPage.css';
import { useTranslation } from 'react-i18next';

function CompanyMessage() {

  const { t } = useTranslation();

  return (
    <div>
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/CompanyMessage0.webp'})`,
          width: '100%',
          height: '600px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h6>{t('㈜에덴은 에덴동산과 같은 안전하고 깨끗한 환경을')}<br />
          {t('이 땅의 미래 세대에게 제공하기 위해 앞장서고 있습니다.')}</h6>
      </section>
   <div className="company-message">
      <img src={process.env.PUBLIC_URL + '/CompanyMessage2.webp'} alt="Company Message" className="company-message-image" />
    </div>
    <div>ㅤ</div>
    <div>ㅤ</div>
    </div>
  );
}

export default CompanyMessage;