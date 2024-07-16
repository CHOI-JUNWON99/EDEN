import React from 'react';


function Atmosphere() {
  return (
    <div>
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Air.webp'})`,
          width: '100%',
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        
      <h6 style={{color: 'white'}}>㈜에덴은 대기 오염을 최소화하기 위한 다양한 기술과 솔루션을 제공하여<br/>깨끗한 공기를 유지하는 데 기여하고 있습니다.<br/>우리는 첨단 대기 정화 기술을 적용하여 <br/>산업 현장에서 발생하는 다양한 오염 물질을 효율적으로 제거하고 있습니다.</h6>
      </section>
      <div style={{justifyContent: 'center',textAlign: 'center'}}>
        <h2>공사 실적</h2>
      </div>
      <section className="research-table">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">계약일</th>
              <th rowSpan="2">공사명</th>
            </tr>
            <tr>
              <th>발주처</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022.01.11</td>
              <td>소규모 사업장 방지시설 설치지원사업(흡수에 의한 시설, 여과집진시설)</td>
              <td>㈜미유켐테크</td>
           </tr>
           <tr>
              <td>2021.12.27</td>
              <td>악취 및 VOCs 흡착시설 제작 및 설치공사</td>
              <td>에코비트 에너지 정세</td>
           </tr>
           <tr>
              <td>2021.12.24</td>
              <td>소규모 사업장 방지시설 설치지원사업 (여과집진장치)</td>
              <td>삼영산업㈜</td>
           </tr>
           <tr>
              <td>2021.09.20</td>
              <td>소규모 사업장 방지시설 설치지원사업(흡수에 의한 시설, 전기집진시설)</td>
              <td>대용물산</td>
           </tr>
           <tr>
              <td>2021.04.29</td>
              <td>활성탄여과기 제작, 설치, 시운전</td>
              <td>예산 신암농공단</td>
           </tr>
           <tr>
              <td> 2021.01.18</td>
              <td>소규모 사업장 방지시설 설치 지원사업(여과집진시설 및 흡착에의한시설)</td>
              <td>금화기계</td>
           </tr>
           <tr>
              <td>2020.09.18</td>
              <td>지원사업(원심력집진시설, 여과집진시설)</td>
              <td>신명산업</td>
           </tr>
           <tr>
              <td>2020.09.02</td>
              <td>소규모 사업장 방지시설 설치 지원사업(여과 및 흡착에 의한 시설)</td>
              <td>태극종합자동차정비</td>
           </tr>
           <tr>
              <td>2020.06.15</td>
              <td>소규모 사업장 방지시설 설치지원사업(원심력집진시설,여과집진시설)</td>
              <td>송운펠릿 주식회사</td>
           </tr>
           <tr>
              <td>2020.06.10</td>
              <td>소규모 사업장 방지시설 설치지원사업(흡수에 의한 시설)</td>
              <td>디에스케미칼</td>
           </tr>
           <tr>
              <td>2020.06.10</td>
              <td>소규모 사업장 방지시설 설치지원사업(흡수에 의한 시설)</td>
              <td>동광금속</td>
           </tr>
           <tr>
              <td>2020.06.10</td>
              <td>소규모 사업장 방지시설 설치지원사업(흡수에 의한 시설)</td>
              <td>신명산업</td>
           </tr>
           <tr>
              <td>2020.01.14</td>
              <td>2019년도 소규모 사업장 방지시설 설치 지원사업(여과집진시설, 흡착에의한 시설)</td>
              <td>한서포리머 주식회사</td>
           </tr>
           <tr>
              <td>2019.09.25</td>
              <td>오룡지구 바이오필터 탈취기 설치공사</td>
              <td>㈜에스엠코리아</td>
            </tr>
            <tr>
              <td>2019. 08.27</td>
              <td>가축분뇨 공동자원화 개보수 지원사업(기계)</td>
              <td>농업회사법인 하늘채 주식회사</td>
            </tr>
            <tr>
              <td>2019.06.26</td>
              <td>소규모 사업장 대기오염방지지설 설치 시범사업(송풍기, 순환펌프 교체)</td>
              <td>현대도금</td>
            </tr>
            <tr>
              <td>2019.04.19</td>
              <td>세계유교선비문화공원 하수처리시설 설치공사 공법기자재</td>
              <td>경상북도개발공사</td>
            </tr>
            <tr>
              <td>2019. 01.28</td>
              <td>서울비행장 방지시설 제작 및 설치공사</td>
              <td>제15특수임무비행단</td>
            </tr>
            <tr>
              <td>2018.12.27</td>
              <td>18-공-방부관리정비고(4049)도장부스 및 방지시설 설치공사</td>
              <td>DM종합건설㈜</td>
            </tr>
            <tr>
              <td>2018.12.19</td>
              <td>long bag filter 실규모 실증설비 설치공사</td>
              <td>㈜한빛파워(포스코 광양)</td>
            </tr>
            <tr>
              <td>2018.11.27</td>
              <td>해남자연순환센터 공동자원화시설 개보수공사</td>
              <td>해남자연순환농업센터 영농조합법인</td>
            </tr>
            <tr>
              <td>2018.01.03</td>
              <td>LQ-1,2호기 덕트 및 후드 보수</td>
              <td>㈜서진오토모티브</td>
            </tr>
            <tr>
              <td>2017.07.20</td>
              <td>활성탄 교체공사</td>
              <td>㈜서진오토모티브</td>
            </tr>
            <tr>
              <td>2016.08.09</td>
              <td>공군서산지역시설공사 대기오염방지설비(방부처리시설)</td>
              <td>쌍용건설 주식회사</td>
            </tr>
            <tr>
              <td>2018.08.17</td>
              <td>광시 소규모하수처리시설 탈취설비수선</td>
              <td>예산군</td>
            </tr>
            <tr>
              <td>2018.04.19</td>
              <td>계촌지구 소규모 공공하수처리시설 반응조 바이오휠 수선</td>
              <td>대전지방조달청(예산군)</td>
            </tr>
            <tr>
              <td>2016.11.23</td>
              <td>예산군 분뇨처리시설 악취개선사업(기계) 관급자재</td>
              <td>대진지방조달청(예산군)</td>
            </tr>
            <tr>
              <td>2016.09.19</td>
              <td>신양지구 하수처리시설 설치사업 중 기계공사</td>
              <td>유진건설㈜</td>
            </tr>
            <tr>
              <td>2015.08.27</td>
              <td>성남 서울공항(14-지상장비고등시설공사)</td>
              <td>주식회사 엔테크 건설</td>
            </tr>
            <tr>
              <td>2015.08.20</td>
              <td>폐열회수재이용시설 설치공사</td>
              <td>삼호물산</td>
            </tr>
            <tr>
              <td> 2014.11.18</td>
              <td>회수기 보수공사</td>
              <td>㈜서진오토모티브</td>
            </tr>
            <tr>
              <td>2013. 10.01</td>
              <td>후평동중계펌프장탈취기제작및설치공사</td>
              <td>㈜태성종합건설</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>강릉비행장 오염방지 시설공사</td>
              <td>선원건설㈜</td>
            </tr>
            <tr>
              <td>2010</td>
              <td>원주 공군시설 대기오염 방지시설 설치공사(방부처리장 급/배기 후드)</td>
              <td>휴먼택 코리아</td>
            </tr>
            <tr>
              <td>2008</td>
              <td>예천 공군부대 대기오염방지장치 제작 및 설치공사(도장부스)</td>
              <td>양우건설㈜</td>
            </tr>
            <tr>
              <td>2005</td>
              <td>사천공군비행장 도장부스 급배기 장치 및 방지시설 설치공사</td>
              <td>온고올 건축</td>
            </tr>
            <tr>
              <td>-</td>
              <td>여과집진장치 설치 공사</td>
              <td>㈜고려인더스트리(러시아)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Atmosphere;