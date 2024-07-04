import React from 'react';
import '../css/MainPage.css';

function CompanyMessage() {
  return (
    <div>
      <div>ㅤ</div>
      <div className="main-content">
        <div className="company-message">
          <h2>인사말</h2>
        </div>
        <div className="company-message">
          <p>㈜에덴은 에덴동산과 같은 안전하고 깨끗한 환경을</p>
        </div>
        <div className="company-message">
           <p>이 땅의 미래 세대에게 제공하기 위해 앞장서고 있습니다.</p>
        </div>  
      </div>
   <div className="company-message">
      <img src={process.env.PUBLIC_URL + '/CompanyMessage2.png'} alt="Company Message" className="company-message-image" />
    </div>
    </div>
  );
}

export default CompanyMessage;