import React from 'react';
import '../css/RaD.css';

function RaD() {
  return (
    <div className="main-page">
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/RaB/RaB.jpg'})`,
          width: '100%',
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h1>R&D 연구개발</h1>
      </section>
      <section className="research-table">
        <table>
          <thead>
            <tr>
              <th colSpan="2">수행기간</th>
              <th rowSpan="2">연구과제명</th>
              <th rowSpan="2">부처명</th>
              <th rowSpan="2">역할</th>
            </tr>
            <tr>
              <th>시작일</th>
              <th>종료일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2011. 06</td>
              <td>2012. 05</td>
              <td>EM-SYSTEM을 이용한 하, 폐수 고도처리시설(EM-SBR) 개발</td>
              <td><img src="/RaB/MSS.jpg" alt="중소벤처기업부" /></td>
              <td>참여기업</td>
            </tr>
            <tr>
              <td>2015. 08</td>
              <td>2016. 07</td>
              <td>야질산화-아탈질을 이용한 질소/인 동시제거 SBR 시스템 개발</td>
              <td><img src="/RaB/MSS.jpg" alt="중소벤처기업부" /></td>
              <td>참여기업</td>
            </tr>
            <tr>
              <td>2016. 12</td>
              <td>2017. 06</td>
              <td>음식점 대기시설 개선 시범사업</td>
              <td><img src="/RaB/ME.jpg" alt="환경부" /></td>
              <td>주관기업</td>
            </tr>
            <tr>
              <td>2017. 08</td>
              <td>2018. 04</td>
              <td>직화구이 음식점에서 미세먼지 제거를 위한 전기집진장치 개발</td>
              <td><img src="/RaB/KEITI.png" alt="한국환경산업기술원" /></td>
              <td>주관기업</td>
            </tr>
            <tr>
              <td>2017. 09</td>
              <td>2017. 12</td>
              <td>직화구이 음식점 입자상물질(TSP) 및 악취물질 동시처리장치 개발</td>
              <td><img src="/RaB/CI_winwin.jpg" alt="대*중소기업 농어업협력재단" /></td>
              <td>참여기업</td>
            </tr>
            <tr>
              <td>2018. 10</td>
              <td>2020. 09</td>
              <td>미세먼지 배출저감 및 위험회피 R&D 및 실증</td>
              <td><img src="/RaB/SE.jpg" alt="서울에너지공사" /></td>
              <td>협력기관</td>
            </tr>
            <tr>
              <td>2019. 07</td>
              <td>2021. 08</td>
              <td>해외플랜트 시장개척 지원사업: 베트남, 박닌성 3,000톤/일 폐수처리 플랜트 공정설비</td>
              <td><img src="/RaB/KOPIA.png" alt="한국플랜트산업협회" /></td>
              <td>참여기업</td>
            </tr>
            <tr>
              <td>2022. 01</td>
              <td>2023. 01</td>
              <td>서울시 인쇄소 휘발성유기화합물(VOCs) 저감시설 시범설치 및 저감방안</td>
              <td><img src="/RaB/Seoul.png" alt="서울특별시" /></td>
              <td>주관기관</td>
            </tr>
            <tr>
              <td>2022. 07</td>
              <td>2023. 07</td>
              <td>자연유하 방식 정화조의 하수악취 저감 방안 실증 용역</td>
              <td><img src="/RaB/Seoul.png" alt="서울특별시" /></td>
              <td>주관기관</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default RaD;
