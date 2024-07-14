import React,{useEffect} from 'react';
import '../css/Water.css';

function WaterManagement() {

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>대기오염 방지시설 관리</h2>
        <p>㈜에덴은 대기오염 방지시설의 효율적이고 지속 가능한 운영을 위해<br/> 체계적인 관리 서비스를 제공합니다. 정기적인 점검, 유지보수 및 문제 해결을 포함하여<br/> 고객의 대기오염 방지시설이 항상 최상의 상태를 유지할 수 있도록 지원합니다.</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>정기적인 점검 및 유지보수</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>신속한 문제 해결</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>운영 효율성 극대화</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>고객 맞춤형 관리 서비스</p>
        </div>
      </section>
    </div>
   );
  }
  
  export default WaterManagement;