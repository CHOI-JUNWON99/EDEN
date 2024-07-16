import React from 'react';

function Srs() {
    return (
      <div>
      <div>ㅤ</div>
      <section style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech2/SRS.webp'})`,
        width: "100%",
        height: '1500px', // 동영상과 비슷한 높이로 설정
        backgroundSize: 'contain', // 원본 비율을 유지하며 컨테이너에 맞추기
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // 이미지 반복을 방지
      }}>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
    );
  }
  
  export default Srs;