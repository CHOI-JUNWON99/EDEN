import React from 'react';

function EmMbr() {
  return (
    <div>
      <div>ㅤ</div>
      <section style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-MBR.jpg'})`,
        width: "100%",
        height: '1500px', // 동영상과 비슷한 높이로 설정
        backgroundSize: 'contain', // 원본 비율을 유지하며 컨테이너에 맞추기
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // 이미지 반복을 방지
      }}>
      </section>
      <section className="research-table">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">공사명</th>
              <th rowSpan="2">발주처</th>       
            </tr>
            <tr>
              <th>계약일</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>2018.05.09</td>
              <td>참아람 김포공장 오수처리시설 기계공사 및 배관공사</td>
              <td>주식회사 참아람</td>
            </tr>
            <tr>
              <td>2018.06.09</td>
              <td>예산군 노인종합복지관 건립공사 관급자재(우수중수처리시설)</td>
              <td>대전지방조달청(예산군)</td>
            </tr>
            <tr>
              <td>2018.02.23</td>
              <td>오수처리시설 분리막 교체 공사</td>
              <td>리앤리 어드바이저스 주식회사</td>
            </tr>
            <tr>
              <td>2018.01.03</td>
              <td>오수처리시설 펌프류 교체 및 드럼스크림 필터교체 공사</td>
              <td>한화호텔앤드리조트 ㈜태안사업본부</td>
            </tr>
            <tr>
              <td>2017.06.01</td>
              <td>오수처리시설 막 제작 및 설치 계약</td>
              <td>한화호텔앤드리조트㈜</td>
            </tr>
            <tr>
              <td>2016.08.16</td>
              <td>참아람 공장 오,폐수처리시설 및 비점오염저감시설</td>
              <td>주식회사 참아람</td>
            </tr>
            <tr>
              <td>2015.07.17</td>
              <td>슬라이딩센터 오수처리시설공사</td>
              <td>대림산업㈜</td>
            </tr>
            <tr>
              <td>2014.07.22</td>
              <td>MEMBRANE 납품 및 교체 공사</td>
              <td>한화호텔&리조트</td>
            </tr>
            <tr>
              <td>-</td>
              <td>폐수처리장</td>
              <td>㈜현대건설(베트남)</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default EmMbr;
