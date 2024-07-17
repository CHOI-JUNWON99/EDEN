import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Water.css';

function NavConstruction() {
  const { t } = useTranslation();
  
  return (
    <div>
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/NavConstruction.webp'})`,
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
      <h6 style={{color: 'white'}}>{t('㈜에덴은 토목공사업에서 다년간의 경험과 전문성을 보유하고 있습니다.')}<br/>{t('우리는 고품질의 토목공사 서비스를 제공하여 인프라 개선 및 도시 개발에 기여합니다.')}</h6>
      </section>
      <div style={{justifyContent: 'center',textAlign: 'center'}}>
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
              <td>2023.11.15</td>
              <td>{t('구립한울 어린이집 그린리모델링 공사')}</td>
              <td>{t('서울특별시 동대문구')}</td>
            </tr>
            <tr>
              <td>2023.11.15</td>
              <td>{t('구립누리보듬 어린이집 그린리모델링 공사')}</td>
              <td>{t('서울특별시 동대문구')}</td>
            </tr>
            <tr>
              <td>2023.11.13</td>
              <td>{t('불광천 미디어센터 옥외 환경정비 공사')}</td>
              <td>{t('서울특별시 은평구')}</td>
            </tr>
            <tr>
              <td>2023.11.09</td>
              <td>{t('반지하주택(3,4단계) 개폐식방법창 설지 지원사업 공사(권역2)')}</td>
              <td>{t('서울특별시 송파구')}</td>
            </tr>
            <tr>
              <td>2023.10.25</td>
              <td>{t('평택시 용이보도육교 보수공사')}</td>
              <td>{t('경기도 평택시')}</td>
            </tr>
            <tr>
              <td>2023.08.18</td>
              <td>{t('안말공영주차장 화장실 설치사업 기계설비공사')}</td>
              <td>{t('서울특별시 강동구')}</td>
            </tr>
            <tr>
              <td>2023.07.24</td>
              <td>{t('광일중 교사동 화장실 개선공사')}</td>
              <td>{t('경기도 교육청, 경기도광주하남 교육지원청')}</td>
            </tr>
            <tr>
              <td>2023.06.20</td>
              <td>{t('미래관 노후 시스템 냉난방기 철거공사')}</td>
              <td>{t('서울특별시 서울시립대학교')}</td>
            </tr>
            <tr>
              <td>2023.05.31</td>
              <td>{t('청담고등학교 냉난방개선 기계공사')}</td>
              <td>{t('경기도교육청 청담고등학교')}</td>
            </tr>
            <tr>
              <td>2023.05.26</td>
              <td>{t('사격장 표적호 및 법면보강공사')}</td>
              <td>{t('제7297부대')}</td>
            </tr>
            <tr>
              <td>2023.05.19</td>
              <td>{t('00부대 여성필수시설 보수')}</td>
              <td>{t('제7군단')}</td>
            </tr>
            <tr>
              <td>2023.05.19</td>
              <td>{t('2022년 사립학교 교육환경개선사업 교내 배수로 교체공사 (토목공사)')}</td>
              <td>{t('경기도교육청 율곡고등학교')}</td>
            </tr>
            <tr>
              <td>2023.04.08</td>
              <td>{t('현덕면 덕목리 919-2번지 일원 용수로 정비공사')}</td>
              <td>{t('경기도 평택시 농업기술센터')}</td>
            </tr>
            <tr>
              <td>2023.03.02</td>
              <td>{t('두정2리(소로2-15호선) 도시계획도로개설공사(2구간),(2차분)')}</td>
              <td>{t('경기도 평택시')}</td>
            </tr>
            <tr>
              <td>2023.01.07</td>
              <td>{t('상하수도 설비공사업')}</td>
              <td>{t('성신 다빈치')}</td>
            </tr>
            <tr>
              <td>2023.01.03</td>
              <td>{t('수도권제1순환선 시흥하늘휴게소 부체도로 개량공사(2차)')}</td>
              <td>{t('한국도로공사')}</td>
            </tr>
            <tr>
              <td>2022.11.03</td>
              <td>{t('고덕면 문곡리 192-2번지 일원용/배수로 정비공사')}</td>
              <td>{t('경기도 평택시 농업기술센터')}</td>
            </tr>
            <tr>
              <td>2022.10.17</td>
              <td>{t('2022년 사립학교 교육환경개선사업 교내 배수로')}</td>
              <td>{t('경기도교육청 율곡고등학교')}</td>
            </tr>
            <tr>
              <td>2022.07.18</td>
              <td>{t('자연유하 정화조 하수악취 저감 실증조사 용역')}</td>
              <td>{t('서울특별시')}</td>
            </tr>
            <tr>
              <td>2022.04.06</td>
              <td>{t('두정2리(소로2-15호선)도시계획도로개설공사(2구간)')}</td>
              <td>{t('경기도 평택시')}</td>
            </tr>
            <tr>
              <td>2022.03.24</td>
              <td>{t('인쇄소 휘발성유기화합물(VOCs)저감시설 시범설치 및 저감방안 학술용역')}</td>
              <td>{t('서울특별시')}</td>
            </tr>
            <tr>
              <td>2022.03.16</td>
              <td>{t('고덕면 문곡리 192-2번지 일원용 배수로 정비공사')}</td>
              <td>{t('경기도 평택시 농업기술센터')}</td>
            </tr>
            <tr>
              <td>2022.03.14</td>
              <td>{t('홍원1리 배수로 정비공사')}</td>
              <td>{t('경기도 평택시 포승읍')}</td>
            </tr>
            <tr>
              <td>2021.12.28</td>
              <td>{t('송현초 노후 냉난방 개선 기계설비공사')}</td>
              <td>{t('경기도 교육청, 경기도평택 지원청')}</td>
            </tr>
            <tr>
              <td>2021.12.06</td>
              <td>{t('홍원1리 배수로 정비공사')}</td>
              <td>{t('경기도 평택시 포승읍')}</td>
            </tr>
            <tr>
              <td>2020.07.16</td>
              <td>{t('서부여성발전센터 수영장 여과기 제작 설치 및 부대설비 교체 공사')}</td>
              <td>{t('서울시 서부여성발전센터')}</td>
            </tr>
            <tr>
              <td>2020.06.24</td>
              <td>{t('2020년 청오지소 수초제거 사업')}</td>
              <td>{t('한국농어촌공사 평택지사')}</td>
            </tr>
            <tr>
              <td>2020.03.26</td>
              <td>{t('청오지구 용배수로 퇴적물제거사업')}</td>
              <td>{t('한국농어촌공사 평택지사')}</td>
            </tr>
            <tr>
              <td>2019.08.07</td>
              <td>{t('2019학년도 예산유치원 교육환경개선 공사')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2018.08.23</td>
              <td>{t('덕산 공공하수처리시설 BY-PASS 배관변경 공사')}</td>
              <td>{t('예산군')}</td>
            </tr>
            <tr>
              <td>2018.05.25</td>
              <td>{t('노후계량기 교체사업')}</td>
              <td>{t('계룡시 상하수도사업소장')}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default NavConstruction;