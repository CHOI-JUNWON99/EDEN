import React, { useEffect } from 'react';
import '../css/Water.css';

function WaterSewerage() {
  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>상하수도 설비공사업</h2>
        <p>㈜에덴은 상하수도 설비공사업에서 뛰어난 기술력과 풍부한 경험을 보유하고 있습니다. <br/>우리는 다양한 프로젝트를 통해 고품질의 상하수도 설비를 구축하여 <br/>깨끗한 물 공급과 위생적인 하수 처리를 보장합니다.</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="깨끗한 물 공급" className="image"/>
          <p>깨끗한 물 공급</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="위생적인 하수 처리" className="image"/>
          <p>위생적인 하수 처리</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="최신 설비 기술 적용" className="image"/>
          <p>최신 설비 기술 적용</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="환경 규제 준수" className="image"/>
          <p>환경 규제 준수</p>
        </div>
      </section>
      <div style={{justifyContent: 'center',textAlign: 'center'}}>
        <h2>공사 실적</h2>
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div className="company-message">
        <img src={process.env.PUBLIC_URL + '/WaterSewerage.webp'} alt="Company Message" className="company-message-image" />
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default WaterSewerage;
