import React, {useEffect} from 'react';
import '../css/Water.css';

function WaterManagement() {

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>수처리시설 관리</h2>
        <p>㈜에덴은 수처리시설의 효율적이고 지속 가능한 운영을 위해 <br/> 체계적인 관리 서비스를 제공합니다. 정기적인 점검, 유지보수 및 문제 해결을 포함하여 <br/> 고객의 수처리시설이 항상 최상의 상태를 유지할 수 있도록 지원합니다.</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
        <img src="/MainPageOurService/water3-1.webp" alt="정기적인 점검 및 유지보수" className="image"/>
          <p>정기적인 점검 및 유지보수</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="신속한 문제 해결" className="image"/>
          <p>신속한 문제 해결</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="운영 효율성 극대화" className="image"/>
          <p>운영 효율성 극대화</p>
        </div>
        <div className="image-item">
        <img src="/MainPageOurService/water1-1.webp" alt="고객 맞춤형 관리 서비스" className="image"/>
          <p>고객 맞춤형 관리 서비스</p>
        </div>
      </section>
    </div>
   );
  }
  
  export default WaterManagement;