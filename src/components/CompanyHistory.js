import React from 'react';
import '../css/CompanyHistory.css';

const events = [
  {
    year: 2002,
    achievements: ['회사 설립'],
  },
  {
    year: 2003,
    achievements: [
        '생물학적 필터를 이용한 약취 및 휘발성 물질의 제거방법에 관한 기술협약 체결',
        '오, 폐수 처리용 침지식 정밀여과 평막모듈에 관한 기술협약 체결',
        '환경오염방지시설 원격관리 시스템에 관한 기술협약 체결',
        '멸균수 세척에 의한 공기청정기 개발',
    ],
  },
  {
    year: 2004,
    achievements: ['EM(Eco-Mecanism)-System을 이용한 하, 폐수 고도처리시설 개발 착수'],
  },
  {
    year: 2005,
    achievements: ['한국산업안전공단 클린사업 설비업체 등록',
        '무산소/호기 및 슬러지 블랭킷을 이용한 하수 고도처리기술-AOSB(환경신기술지정 56호) 기술 계약',
        '식물토양층을 이용한 오, 하수 자연 정화법(특허 제0458564호) 기술 계약 체결',
        'EM(Eco-Mecanism)-System을 이용한 하, 폐수 고도처리시설 실증 플랜트 가동',],
  },
  {
    year: 2006,
    achievements: ['질소가스를 이용한 VOCs 회수 시스템 특허 출원',
        'EM-System을 이용한 하수고도처리시설 특허 출원',
        '메탄가스를 이용한 발전 시스템 특허 출원',
        '미생물을 이용한 악취 및 폐가스 정화처리장치 실용 및 특허 출원',],
  },
  {
    year: 2007,
    achievements: ['생물학적 여재를 이용한 오폐수처리장치 (특허 제10-0745444호)',
        '오수처리시설 등 설계, 시공업 등록 (예산 제8호)',
        '충남 예산군 예산리 509-3 3층 (지사 설립)',
        '오폐수 처리수용 자외선 램프의 세척장치 특허 출원 (특허 제07-92259호)',
        '컨베이어 시스템의 링크체인, 슈트 및 파이프라인과 링크체인 콘베이어 시스템 (특허 제07-48741)',
        '상징수 배출용 디켄터 이동장치 (특허 제07-99792호)',
        '러시아 여과집진장치 설치 공사',],
  },
  {
    year: 2008,
    achievements: ['환경과기술에서 주식회사 에덴으로 상호 변경',
        '가축분뇨 처리시설 설계, 시공업 등록 (예산 제8호)',
        '개인하수처리시설 관리업 등록 (예산 2008-5호)'],
  },
  {
    year: 2009,
    achievements: ['베트남 하수처리장 공법 수출',
        '경기도 평택 공장 준공',
        '오, 폐수 처리수용 자외선 램프의 세척장치 특허 (제10-0897570호) - UV 소독기 개발',
        '상징수 배출용 디켄터 이동장치 특허 등록 (제10-0925502호)',],
  },
  {
    year: 2010,
    achievements: ['도장부스의 환기시스템 특허 등록 (제10-1094977호)'],
  },
  {
    year: 2011,
    achievements: ['하폐수 처리수 재이용 장치 빔 방법 특허 등록 (제10-1129292호)',
        '공주대 산학연협력 공동기술개발 실시 (EM-SBR)',
        '변기의 원심배출장치 (제10-1199799호)',
        '코엑스 환경전시회 참여',],
  },
  {
    year: 2012,
    achievements: ['상하수도 설비 공사업 등록',
        '공주대 산학연협력 공동기술개발 완료 (EM-SBR)',
        '하, 폐수의 인 농축 회수 장치 밒 방법 특허 등록 (제10-1256821호)',
        '유입가스분배기를 이용한 생물학적 악취 처리시설 특허 등록 (제10-1249291호)',],
  },
  {
    year: 2013,
    achievements: ['패키지형 상수도 고도정수처리시설 특허 등록 (제10-1300438호)',
        '초기우수 제어 및 비점오염원 처리장치와 그 처리방법 특허 등록 (제1388994호)',
        '하, 폐수의 인 농축 회수 장치 및 방법 특허 등록 (제10-1256821호)',
        '알제리 하수처리 공법 수출'],   
  },
  {
    year: 2014,
    achievements: ['(주)에덴 기업부설연구소 서울 사무실 (등록 제20140162호)',
        '한반도통일미래센터 건립공사(오수처리시설) (중경산업)'],
  },
  {
    year: 2015,
    achievements: ['(주)에덴 벤처기업 등록 (등록 제2015010817호)',
        '공주대학교 산학연협력 공동기술개발 실시 (EM-SBR Ⅱ) (아질산화-아탈질을 이용한 질소/인 동시제거 SBR System 개발)'],
  },
  {
    year: 2016,
    achievements: ['환경전문공사업(대기) 등록 (면허번호 충남-182호)',
        '펌프 가압수의 압착력에 의한 하폐수 방류수 내의 부유물질 여과장치 특허등록 (제10-1631385호)',
        '하, 폐수 처리장의 자동청소 스크린장치 특허 출원 (10-2016-0098614)'],
  },
  {
    year: 2017,
    achievements: ['미세먼지 제어 및 운영방안에 관한 용역사업 (환경부)',
        '예산군 분뇨처리시설 악취개선사업 (대전지방조달청(예산군))',],
  },
  {
    year: 2018,
    achievements: ['시설물 유지관리업 등록',
        '공군서산지역시설공사 대기오염방지설비(방부처리시설) (쌍용건설)',],
  },
  {
    year: 2019,
    achievements: ['해외플랜트 시장 개척 지원사업 (한국플랜트산업협회)',
        '서울비행장 방지시설 제작 및 설치공사 (공군 제15특수임무비행단)',],
  },
  {
    year: 2020,
    achievements: ['미세먼지 배출저감 및 위험회피 R&D 및 실증 (서울에너지공사)',
        '서부여성발전센터 수영장 여과기 제작 설치 및 부대설비 교체공사 (서울시 서부여성발전센터)',],
  },
  {
    year: 2021,
    achievements: ['토목공사업 등록',
        '악취 및 VOCs 흡착시설 제작 및 설치공사 (에코비트 에너지 정세)',],
  },
  {
    year: 2022,
    achievements: ['체인형 회전체를 이용한 VOCs 농축 제거 시스템 특허 등록',
        '국군 포천병원 오폐수처리시설 개수공사 (주흥환경)',],
  },
  {
    year: 2023,
    achievements: ['이길리 집단이주마을 재해복구사업 하수처리장비 (강원도 철원군)',
        '무안 항공특화산업단지 조성공사 (주식회사 예진종합건설)',],
  },
  {
    year: 2024,
    achievements: ['업데이트 예정'],
  },
];

const CompanyHistory = () => {
    const scrollToYear = (year) => {
      const element = document.getElementById(`year-${year}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="company-history">
        <div className="history-buttons">
          <button onClick={() => scrollToYear(2002)}>2002년~2010년</button>
          <button onClick={() => scrollToYear(2011)}>2011년~2020년</button>
          <button onClick={() => scrollToYear(2021)}>2021년~현재</button>
        </div>
        <div className="timeline">
          {events.map((event, index) => (
            <div
              key={event.year}
              id={`year-${event.year}`}
              className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <h3>{event.year}년</h3>
                <ul>
                  {event.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CompanyHistory;