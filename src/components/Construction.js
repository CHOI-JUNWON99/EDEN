import React,{useEffect} from 'react';
import '../css/Water.css';

function Construction() {

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="water-treatment-page">
      <section className="intro-section">
        <h2>토목공사업</h2>
        <p>㈜에덴은 토목공사업에서 다년간의 경험과 전문성을 보유하고 있습니다. 우리는 고품질의 토목공사 서비스를 제공하여 인프라 개선 및 도시 개발에 기여합니다.</p>
      </section>
      <section className="image-grid">
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>인프라 개선</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>도시 개발 지원</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>최신 토목 기술 적용</p>
        </div>
        <div className="image-item">
          <div className="image-placeholder">사진 준비 중..</div>
          <p>환경 친화적 시공 방법</p>
        </div>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div className="company-message">
      <img src={process.env.PUBLIC_URL + '/Construction.png'} alt="Company Message" className="company-message-image" />
    </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default Construction;