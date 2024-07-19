import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function WaterQuality() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);  // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div>
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/water.png'})`,
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
      <h6 style={{ color: 'white' }}>
        {t('㈜에덴은 첨단 수질 관리 솔루션을 통해 오염된 물을')}<br />
        {t('깨끗하게 정화하여 건강한 수자원을 보존하는 데 기여하고 있습니다.')}<br />
        {t('우리 회사는 다양한 수질 정화 기술을 활용하여 산업 폐수, 생활 하수 등을 효과적으로 처리하고 있으며,')}<br />
        {t('이를 통해 깨끗한 물 환경을 유지하는 데 최선을 다하고 있습니다.')}
      </h6>
      </section>
      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
        <h2>{t('공사 실적')}</h2>
      </div>
      <section className="research-table">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">{t('계약일')}</th>
              <th rowSpan="2">{t('공사명')}</th>
            </tr>
            <tr>
              <th>{t('발주처')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023.11.30</td>
              <td>{t('동일면 대영,봉남마을 하수도 정비사업(3차분) 공법지자재 구매')}</td>
              <td>{t('광주지방조달청(고흥군)')}</td>
            </tr>
            <tr>
              <td>2023.10.31</td>
              <td>{t('한겨레고 오수정화조 개선공사')}</td>
              <td>{t('경기도 교육청 한겨례고등학교')}</td>
            </tr>
            <tr>
              <td>2023.10.20</td>
              <td>{t('FRP오수처리시설 제작 및 납품')}</td>
              <td>{t('㈜파인우드')}</td>
            </tr>
            <tr>
              <td>2023.09.25</td>
              <td>{t('예산시험장 오폐수처리시설 보수공사')}</td>
              <td>{t('도로교통공단 예산운전면허시험장')}</td>
            </tr>
            <tr>
              <td>2023.09.07</td>
              <td>{t('수도병원 자동제어설비 교체공사')}</td>
              <td>{t('국군의무사령부')}</td>
            </tr>
            <tr>
              <td>2023.08.28</td>
              <td>{t('무안 항공특화산업단지 조성공사 하수처리시설 기자재 납품 설치공사')}</td>
              <td>{t('㈜예진종합건설')}</td>
            </tr>
            <tr>
              <td>2023.08.08</td>
              <td>{t('FRP 오수처리시설 제작 및 납품(3개소)')}</td>
              <td>{t('이본건설㈜')}</td>
            </tr>
            <tr>
              <td>2023.08.05</td>
              <td>{t('오수처리장 반응조 포기배관 제작 및 설치공사')}</td>
              <td>{t('㈜셀럽골프앤리조트')}</td>
            </tr>
            <tr>
              <td>2023.07.14</td>
              <td>{t('4동 지하1층 집수정 등 오수 배출 펌프 교체 공사')}</td>
              <td>{t('㈜경기테크노파크')}</td>
            </tr>
            <tr>
              <td>2023.02.28</td>
              <td>{t('이길리 집단이주마을 재해복구사업(토목)_복합하수처리장비')}</td>
              <td>{t('강원도 철원군')}</td>
            </tr>
            <tr>
              <td>2022.10.24</td>
              <td>{t('농협대학교 하수처리시설 개선공사')}</td>
              <td>{t('농협대학교')}</td>
            </tr>
            <tr>
              <td>2022.08.26</td>
              <td>{t('세차장 폐수처리시설 공사')}</td>
              <td>{t('주식회사 진원')}</td>
            </tr>
            <tr>
              <td>2022.08.01</td>
              <td>{t('21-대미-수원비행장 창고 시설공사 중 정화조공사')}</td>
              <td>{t('요진건설산업')}</td>
            </tr>
            <tr>
              <td>2022.07.01</td>
              <td>{t('동일면 대영, 봉남마을 하수도 정비사업')}</td>
              <td>{t('㈜에스오씨')}</td>
            </tr>
            <tr>
              <td>2022.03.25</td>
              <td>{t('대산산업용수 방류수 TOC 안정화사업 기본 및 실시설계 용역')}</td>
              <td>{t('㈜동해종합기술공사')}</td>
            </tr>
            <tr>
              <td>2022.03.18</td>
              <td>{t('국군 포천병원 오폐수처리시설 개수공사 (시운전 포함)')}</td>
              <td>{t('주흥환경㈜')}</td>
            </tr>
            <tr>
              <td>2022.03.10</td>
              <td>{t('비전 소규모 공공하수처리시설 개량사업중 기계설비공사')}</td>
              <td>{t('남원시환경사업소')}</td>
            </tr>
            <tr>
              <td>2022.01.05</td>
              <td>{t('고흥군 대영, 봉남 지구 농어촌 마을 하수도 정비사업 기술사용 협약서')}</td>
              <td>{t('고흥군')}</td>
            </tr>
            <tr>
              <td>2021.12.03</td>
              <td>{t('(21-신영-10)군자폐수처리시설설치')}</td>
              <td>{t('공군 작사예하 방포사예하 제3여')}</td>
            </tr>
            <tr>
              <td>2020.11.10</td>
              <td>{t('D부대 오수처리시설공사')}</td>
              <td>{t('제1891부대')}</td>
            </tr>
            <tr>
              <td>2020.11.10</td>
              <td>{t('D-3부대 오수처리시설공사')}</td>
              <td>{t('제1891부대')}</td>
            </tr>
            <tr>
              <td>2019.12.11</td>
              <td>{t('서울-문산고속도로 건설공사 1공구 일반건설공사 중 오수처리시설공사')}</td>
              <td>{t('㈜에스엠 디자인')}</td>
            </tr>
            <tr>
              <td>2019.11.27</td>
              <td>{t('역탑, 신양, 대천공공하수처리시설 기계설비 보완 공사')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2019.11.07</td>
              <td>{t('은산산업단지 폐수종말처리시설 개보수 공사')}</td>
              <td>{t('신성설비 주식회사')}</td>
            </tr>
            <tr>
              <td>2019.05.08</td>
              <td>{t('자화전자㈜ 본사내 오수처리시설 150m3/day 설치공사')}</td>
              <td>{t('중경산업㈜')}</td>
            </tr>
            <tr>
              <td>2019.04.19</td>
              <td>{t('세계유교선비문화공원 하수처리시설 설치공사 공법기자재')}</td>
              <td>{t('경상북도개발공사')}</td>
            </tr>
            <tr>
              <td>2019.02.21</td>
              <td>{t('국립익산박물관 건립공사 오수처리시설')}</td>
              <td>{t('㈜송림')}</td>
            </tr>
            <tr>
              <td>2019.02.07</td>
              <td>{t('한반도통일미래센터 제2직원숙소 오수처리시설')}</td>
              <td>{t('경호종합건설㈜')}</td>
            </tr>
            <tr>
              <td>2019.01.30</td>
              <td>{t('국립익산박물관 건립공사 빗물처리시설')}</td>
              <td>{t('㈜아쿠아텍')}</td>
            </tr>
            <tr>
              <td>2018.12.15</td>
              <td>{t('액비저장조(149톤 4기, 134톤 1기)설치공사')}</td>
              <td>{t('농부네아침 영농조합법인')}</td>
            </tr>
            <tr>
              <td>2018.10.29</td>
              <td>{t('당진시 동일교회 오수처리')}</td>
              <td>{t('호수환경')}</td>
            </tr>
            <tr>
              <td>2018.10.12</td>
              <td>{t('관작농공단지 정수시설 정비공사')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2018.06.29</td>
              <td>{t('호곡지구 마을하수처리시설 설치공사 관급자재(공법자재) 구입')}</td>
              <td>{t('전북지방조달청(남원시)')}</td>
            </tr>
            <tr>
              <td>2018.06.11</td>
              <td>{t('영주 한국문화테마파크 건립현장내 오수처리시설 설치')}</td>
              <td>{t('㈜그리너스')}</td>
            </tr>
            <tr>
              <td>2018.05.23</td>
              <td>{t('세차장 폐수처리시설 설치공사')}</td>
              <td>{t('삼보개발 주식회사')}</td>
            </tr>
            <tr>
              <td>2018.05.09</td>
              <td>{t('참아람 김포공장 오수처리시설 기계공사 및 배관공사')}</td>
              <td>{t('주식회사 참아람')}</td>
            </tr>
            <tr>
              <td>2018.04.19</td>
              <td>{t('대동지구 소규모 공공하수처리시설 EM-SBR반응조 유입분배장치 수선')}</td>
              <td>{t('대전지방조달청(예산군)')}</td>
            </tr>
            <tr>
              <td>2018.03.22</td>
              <td>{t('액비저장조(1200m3) 설치공사')}</td>
              <td>{t('농영회사법인 하늘채 주식회사')}</td>
            </tr>
            <tr>
              <td>2018.06.09</td>
              <td>{t('예산군 노인종합복지관 건립공사 관급자재(우수중수처리시설)')}</td>
              <td>{t('대전지방조달청(예산군)')}</td>
            </tr>
            <tr>
              <td>2018.02.23</td>
              <td>{t('오수처리시설 분리막 교체 공사')}</td>
              <td>{t('리앤리 어드바이저스 주식회사')}</td>
            </tr>
            <tr>
              <td>2018.01.19</td>
              <td>{t('일광 오사 격납고 FRP오수처리시설공사')}</td>
              <td>{t('㈜유원인더스트리')}</td>
            </tr>
            <tr>
              <td>2018.01.03</td>
              <td>{t('오수처리시설 펌프류 교체 및 드럼스크림 필터교체 공사')}</td>
              <td>{t('한화호텔앤드리조트 ㈜태안사업본부')}</td>
            </tr>
            <tr>
              <td>2017.12.13</td>
              <td>{t('서울대학교 남부학술림 교육연구동 신축공사 중 오수처리시설공사')}</td>
              <td>{t('㈜송정종합건설')}</td>
            </tr>
            <tr>
              <td>2017.12.07</td>
              <td>{t('육군 파주 고양 병영시설 BTL사업 오수처리시설 A지역 개선공사')}</td>
              <td>{t('공우이엔씨 주식회사')}</td>
            </tr>
            <tr>
              <td>2017.09.05</td>
              <td>{t('송리지구 농어촌마을 하수도정비공사(2차)')}</td>
              <td>{t('대구지방조달청(안동시)')}</td>
            </tr>
            <tr>
              <td>2017.09.05</td>
              <td>{t('안동 송리지구 농어촌마을하수도 정비사업')}</td>
              <td>{t('㈜대한테크')}</td>
            </tr>
            <tr>
              <td>2017.08.14</td>
              <td>{t('장암산업단지 내 오수처리시설 개보수')}</td>
              <td>{t('대전지방조달청(부여군)')}</td>
            </tr>
            <tr>
              <td>2017.07.18</td>
              <td>{t('2017 광시 동산양수장 취입관로 설치사업')}</td>
              <td>{t('대전지방조달청(예산군)')}</td>
            </tr>
            <tr>
              <td>2017.06.01</td>
              <td>{t('오수처리시설 막 제작 및 설치 계약')}</td>
              <td>{t('한화호텔앤드리조트㈜')}</td>
            </tr>
            <tr>
              <td>2017.05.02</td>
              <td>{t('석문시장 재개발공사 중 오수처리시설공사')}</td>
              <td>{t('호수환경')}</td>
            </tr>
            <tr>
              <td>2016.08.16</td>
              <td>{t('참아람 공장 오,폐수처리시설 및 비점오염저감시설')}</td>
              <td>{t('주식회사 참아람')}</td>
            </tr>
            <tr>
              <td>2016.03.28</td>
              <td>{t('두원면 두원마을하수도 공법기자재 구매 제작 설치')}</td>
              <td>{t('고흥군')}</td>
            </tr>
            <tr>
              <td>2016.01.18</td>
              <td>{t('군산 리버힐 관광호텔 오수처리장 개보수 공사')}</td>
              <td>{t('군산리버힐관광호텔')}</td>
            </tr>
            <tr>
              <td>2015.12.14</td>
              <td>{t('2015 봉수산 자연휴향림보와사업(오수정화조)')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2015.08.11</td>
              <td>{t('임산물유통종합정보센터 오수처리시설공사')}</td>
              <td>{t('산림조합중앙회 임산물유통센터')}</td>
            </tr>
            <tr>
              <td>2015.07.17</td>
              <td>{t('슬라이딩센터 오수처리시설공사')}</td>
              <td>{t('대림산업㈜')}</td>
            </tr>
            <tr>
              <td>2015.06.01</td>
              <td>{t('고부면 고부농촌마을하수도설치공사')}</td>
              <td>{t('(유)대신환경개발')}</td>
            </tr>
            <tr>
              <td>2015.04.15</td>
              <td>{t('대림씨엔에스㈜ 오수처리시설 개보수 공사')}</td>
              <td>{t('부여군')}</td>
            </tr>
            <tr>
              <td>2015.03.31</td>
              <td>{t('SEWAGE TREATMENT PACKA')}</td>
              <td>{t('플러스원이엔씨㈜')}</td>
            </tr>
            <tr>
              <td>2014.12.31</td>
              <td>{t('신암농공단지 폐수처리시설 개보수공사')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2014.07.22</td>
              <td>{t('MEMBRANE 납품 및 교체 공사')}</td>
              <td>{t('한화호텔&리조트')}</td>
            </tr>
            <tr>
              <td>2014.07.02</td>
              <td>{t('화천지구 공공하수처리시설 설치사업')}</td>
              <td>{t('호수환경')}</td>
            </tr>
            <tr>
              <td>2014.03.28</td>
              <td>{t('문막관광농원 오수처리시설 설치공')}</td>
              <td>{t('마운틴관광농원')}</td>
            </tr>
            <tr>
              <td>2014.03.23</td>
              <td>{t('한반도통일미래센터건립공사(오수처리시설)')}</td>
              <td>{t('중경산업㈜')}</td>
            </tr>
            <tr>
              <td>2013.11.07</td>
              <td>{t('주문진제2농공단지비점오염처리시설')}</td>
              <td>{t('㈜태성종합건설')}</td>
            </tr>
            <tr>
              <td>-</td>
              <td>{t('폐수처리장')}</td>
              <td>{t('㈜현대건설(베트남)')}</td>
            </tr>
            <tr>
              <td>-</td>
              <td>{t('하수처리장 설치 공사')}</td>
              <td>{t('㈜현대건설(알제리)')}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
  );
}

export default WaterQuality;
