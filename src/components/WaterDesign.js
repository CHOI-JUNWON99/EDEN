import React, {useEffect} from 'react';
import '../css/Water.css';

function WaterDesign() {
  
  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

    return (
      <div className="water-treatment-page">
        <section className="intro-section">
          <h2>수처리시설 설계</h2>
          <p>㈜에덴은 고객의 요구사항을 충족시키는 맞춤형 수처리시설 설계를 제공합니다.<br/>우리 회사는 최신 기술과 다양한 경험을 바탕으로 최적의 설계 솔루션을 제시하여<br/>고객의 수질 문제를 효과적으로 해결합니다.</p>
        </section>
        <section className="image-grid">
          <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt="맞춤형 설계 솔루션 제공" className="image"/>
            <p>맞춤형 설계 솔루션 제공</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-2.webp" alt="최신 기술 도입" className="image"/>
            <p>최신 기술 도입</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-3.webp" alt="효율적이고 경제적인 설계" className="image"/>
            <p>효율적이고 경제적인 설계</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-4.webp" alt="환경 규제 준수" className="image"/>
            <p>환경 규제 준수</p>
          </div>
        </section>
      </div>
    );
  }
  
  export default WaterDesign;