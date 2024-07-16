import React,{useEffect} from 'react';
import '../css/Water.css';

function AirDesign() {

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);
  
    return (
      <div className="water-treatment-page">
        <section className="intro-section">
          <h2>대기오염 방지시설 설계</h2>
          <p>㈜에덴은 다양한 대기오염 방지시설 설계를 통해 깨끗한 대기 환경을 조성합니다.<br/>우리는 최신 기술을 바탕으로 맞춤형 설계 솔루션을 제공하여 고객의 요구를 충족시킵니다.</p>
        </section>
        <section className="image-grid">
          <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt="맞춤형 설계 솔루션 제공" className="image"/>
            <p>맞춤형 설계 솔루션 제공</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt="최신 기술 도입" className="image"/>
            <p>최신 기술 도입</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt="효율적이고 경제적인 설계" className="image"/>
            <p>효율적이고 경제적인 설계</p>
          </div>
          <div className="image-item">
          <img src="/MainPageOurService/water1-1.webp" alt="환경 규제 준수" className="image"/>
            <p>환경 규제 준수</p>
          </div>
        </section>
      </div>
    );
  }
  
  export default AirDesign;