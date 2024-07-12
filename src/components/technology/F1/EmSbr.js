import React from 'react';
import { Container } from '@mui/material';
import ReactPlayer from 'react-player';


function EmSbr() {
  return (
    <div>
      <div>ㅤ</div>
      <section style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-SBR5.png'})`,
        width: "100%",
        height: '1000px', // 동영상과 비슷한 높이로 설정
        backgroundSize: 'contain', // 원본 비율을 유지하며 컨테이너에 맞추기
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // 이미지 반복을 방지
      }}>
      </section>
      <section style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-SBR2.png'})`,
        width: "100%",
        height: '800px', // 동영상과 비슷한 높이로 설정
        backgroundSize: 'contain', // 원본 비율을 유지하며 컨테이너에 맞추기
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // 이미지 반복을 방지
      }}>
      </section>
      <section style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-SBR3.png'})`,
        width: "100%",
        height: '800px', // 동영상과 비슷한 높이로 설정
        backgroundSize: 'contain', // 원본 비율을 유지하며 컨테이너에 맞추기
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // 이미지 반복을 방지
      }}>
      </section>
      <Container>
        <section className="vision-section">
          <div className="vision-video">
              <ReactPlayer 
                url={`${process.env.PUBLIC_URL}/Tech1/EM-SBR.mp4`} 
                controls 
                width="1500px" 
                height="800px" 
                playing 
                loop 
              />
          </div>
        </section>
      </Container>

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
              <td>2022.10.24</td>
              <td>농협대학교 하수처리시 개선공사</td>
              <td>농협대학</td>
            </tr>
            <tr>
              <td>2022.03.10</td>
              <td>비전 소규모 공공하수처리시설 개량사업 중 기계설비공사</td>
              <td>남원시 환경사업소</td>
            </tr>
            <tr>
              <td>2019.05.08</td>
              <td>자화전자㈜ 본사내 오수처리시설 설치공사</td>
              <td>중경산업㈜</td>
            </tr>
            <tr>
              <td>2019.04.19</td>
              <td>세계유교선비문화공원 하수처리시설 설치공사 공법기자재</td>
              <td>경상북도 개발공사</td>
            </tr>
            <tr>
              <td>2019.02.21</td>
              <td>국립익산박물관 건립공사 오수처리시설</td>
              <td>㈜송림</td>
            </tr>
            <tr>
              <td>2019.02.07</td>
              <td>한반도 통일미래센터 제2직원숙소 오수처리시설</td>
              <td>경호종합건설㈜</td>
            </tr>
            <tr>
              <td>2018.10.29</td>
              <td>당진시 동일교회 오수처리</td>
              <td>호수환경</td>
            </tr>
            <tr>
              <td>2018.06.29</td>
              <td>호곡지구 마을하수처리시설 설치공사 관급자재(공법자재) 구입</td>
              <td>전북지방조달청(남원시)</td>
            </tr>
            <tr>
              <td>2018.06.11</td>
              <td>영주 한국문화테마파크 건립현장내 오수처리시설 설치</td>
              <td>㈜그리너스</td>
            </tr>
            <tr>
              <td>2018.05.23</td>
              <td>세차장 폐수처리시설 설치공사</td>
              <td>삼보개발 주식회사</td>
            </tr>
            <tr>
              <td>2018.04.19</td>
              <td>대동지구 소규모 공공하수처리시설 EM-SBR반응조 유입분배장치 수선</td>
              <td>대전지방조달청(예산군)</td>
            </tr>
            <tr>
              <td>2018.01.19</td>
              <td>일광 오사 격납고 FRP오수처리시설공사</td>
              <td>㈜유원인더스트리</td>
            </tr>
            <tr>
              <td>2017.12.13</td>
              <td>서울대학교 남부학술림 교육연구동 신축공사 중 오수처리시설공사</td>
              <td>㈜송정종합건설</td>
            </tr>
            <tr>
              <td>2017.12.07</td>
              <td>육군 파주 고양 병영시설 BTL사업 오수처리시설 A지역 개선공사</td>
              <td>공우이엔씨 주식회사</td>
            </tr>
            <tr>
              <td>2017.09.05</td>
              <td>송리지구 농어촌마을 하수도정비공사(2차)</td>
              <td>대구지방조달청(안동시)</td>
            </tr>
            <tr>
              <td>2017.09.05</td>
              <td>안동 송리지구 농어촌마을하수도 정비사업</td>
              <td>㈜대한테크</td>
            </tr>
            <tr>
              <td> 2017.08.14</td>
              <td>장암산업단지 내 오수처리시설 개보수</td>
              <td>대전지방조달청(부여군)</td>
            </tr>
            <tr>
              <td>2017.05.02</td>
              <td>석문시장 재개발공사 중 오수처리시설공사</td>
              <td>호수환경</td>
            </tr>
            <tr>
              <td>2016.03.28</td>
              <td>두원면 두원마을하수도 공법기자재 구매 제작 설치</td>
              <td>고흥군</td>
            </tr>
            <tr>
              <td>2016.01.18</td>
              <td>군산 리버힐 관광호텔 오수처리장 개보수 공사</td>
              <td>군산리버힐관광호텔</td>
            </tr>
            <tr>
              <td>2015.12.14</td>
              <td>2015 봉수산 자연휴향림보와사업(오수정화조)</td>
              <td>예산군</td>
            </tr>
            <tr>
              <td>2015.08.11</td>
              <td>임산물유통종합정보센터 오수처리시설공사</td>
              <td>산림조합중앙회 임산물유통센터</td>
            </tr>
            <tr>
              <td>2015.06.01</td>
              <td>고부면 고부농촌마을하수도설치공사</td>
              <td>(유)대신환경개발</td>
            </tr>
            <tr>
              <td>2015.04.15</td>
              <td>대림씨엔에스㈜ 오수처리시설 개보수 공사</td>
              <td>부여군</td>
            </tr>
            <tr>
              <td>2015.03.31</td>
              <td>SEWAGE TREATMENT PACKA</td>
              <td>플러스원이엔씨㈜</td>
            </tr>
            <tr>
              <td>2014.12.31</td>
              <td>신암농공단지 폐수처리시설 개보수공사</td>
              <td>예산군</td>
            </tr>
            <tr>
              <td>2014.07.02</td>
              <td>화천지구 공공하수처리시설 설치사업</td>
              <td>호수환경</td>
            </tr>
            <tr>
              <td>2014.03.28</td>
              <td>문막관광농원 오수처리시설 설치공</td>
              <td>마운틴관광농원</td>
            </tr>
            <tr>
              <td>2014.03.23</td>
              <td>한반도통일미래센터건립공사(오수처리시설)</td>
              <td>중경산업㈜</td>
            </tr>
            <tr>
              <td>-</td>
              <td>하수처리장 설치 공사</td>
              <td>㈜현대건설(알제리)</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default EmSbr;
