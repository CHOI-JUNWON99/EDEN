import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/PatentsCertifications.css';
import { useTranslation } from 'react-i18next';

const certificates = [
  { name: '사업자등록증', img: '/Certification1/1-1-1.jpg' },
  { name: '기업부설연구소\n인정서', img: '/Certification1/1-1-2.jpg' },
  { name: '여성기업 확인서', img: '/Certification1/1-1-3.jpg' },
  { name: '중소기업 확인서', img: '/Certification1/1-1-4.png' },
  { name: '개인 하수 처리\n시설관리업', img: '/Certification1/1-2-1.jpg' },
  { name: '개인 하수 처리\n설계시공업', img: '/Certification1/1-2-2.jpg' },
  { name: '기계설비 공사업', img: '/Certification1/1-2-3.jpg' },
  { name: '대기환경전문공사업', img: '/Certification1/1-2-4.jpg' },
  { name: '상하수도 설비 공사업', img: '/Certification1/1-3-1.jpg' },
  { name: '시설물 유지관리업', img: '/Certification1/1-3-2.jpg' },
  { name: '가축분뇨 처리시설\n설계시공업', img: '/Certification1/1-3-3.jpg' },
  { name: '토목 공사업', img: '/Certification1/1-3-4.jpg' },
];

const patents = [
  { name: '생물학적 여재를\n이용한 오폐수\n처리 장치', img: '/Certification2/1-1.jpg' },
  { name: '상징수 배출용\n디켄터 이동장치', img: '/Certification2/1-2.jpg' },
  { name: '오폐수 처리수용\n자외선 램프의\n세척장치', img: '/Certification2/1-3.jpg' },
  { name: '펌프 가압수 압착력에\n의한 하폐수 방류수 내\n부유물질 여과장치', img: '/Certification2/1-4.jpg' },
  { name: '하폐수처리장의\n자동청소 스크린장치', img: '/Certification2/2-1.jpg' },
  { name: '링크체인\n컨베이어 시스템', img: '/Certification2/2-2.jpg' },
  { name: '하폐수 처리수\n재이용 장치 및 방법', img: '/Certification2/2-3.jpg' },
  { name: '폐수의 인 농축\n회수장치 및 방법', img: '/Certification2/2-4.jpg' },
  { name: '패키지형 상수도\n고도정수 처리시설', img: '/Certification2/3-1.jpg' },
  { name: '초기우수 제어 및\n비점오염원 처리장치와 처리방법', img: '/Certification2/3-2.jpg' },
  { name: '유입가스 분배기를\n이용한 생물학적\n악취 처리시설', img: '/Certification2/3-3.jpg' },
  { name: '미생물을 이용한\n악취 및 폐가스\n정화 처리장치', img: '/Certification2/3-4.jpg' },
  { name: '질소가스를 이용한\n배기가스 내의 휘발성\n유기 화합물 회수장치', img: '/Certification2/4-1.jpg' },
  { name: '도장부스의\n환기시스템', img: '/Certification2/4-2.jpg' },
  { name: '체인형 회전체를\n이용한 VOCs\n농축 제거 시스템', img: '/Certification2/4-3.jpg' },
  { name: '변기의 원심배출장치', img: '/Certification2/4-4.jpg' },
];

const PatentsCertifications = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openModal = (img) => {
    setCurrentImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImg('');
  };

  return (
    <div className="intellectual-property">
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Patents.webp'})`,
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
        <h6 style={{ position: 'relative', top: '0px', color:'white' }}>
          {t('㈜에덴은 꾸준한 개발로 더 나은 환경을 만들어나갑니다.')}<br />
          {t('그 동안 축적된 설계 및 시공경험과 기술력을 바탕으로 꾸준한 기술개발을 통해')}<br />
          {t('각종 지식재산권을 보유하고 있습니다. 또한 해외 및 미래 시장에서')}<br />
          {t('기술의 자립 및 선도를 목표로 지속적인 연구개발을 추진하고 있습니다.')}
        </h6>
      </section>
      <header className="intellectual-property-header">
        <div className="main-content">
          <section className="intellectual-property-stats">
            <div className="stat">
              <h2>{t('특허 보유 수')}</h2>
              <p>16</p>
            </div>
          </section>
          <p>{t('2024.01.01 기준')}</p>
        </div>
      </header>
      <section className="certificates">
        <h2>{t('특허 및 인증서')}</h2>
        <div className="patents-buttons">
          <button>{t('사업자 등록증 및 보유면허 및 인증현황')}</button>
        </div>
        <div>ㅤ</div>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate" onClick={() => openModal(cert.img)}>
              <p>{cert.name.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {t(line)}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Image"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">&times;</button>
        <img src={currentImg} alt="Certificate" className="modal-image" />
      </Modal>

      <section className="certificates">
        <div>ㅤ</div>
        <div className="patents-buttons">
          <button>{t('특 허')}</button>
        </div>
        <div>ㅤ</div>
        <div className="certificates-grid">
          {patents.map((cert, index) => (
            <div key={index} className="certificate" onClick={() => openModal(cert.img)}>
              <p>{cert.name.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {t(line)}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Image"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">&times;</button>
        <img src={currentImg} alt="Certificate" className="modal-image" />
      </Modal>
      <div>ㅤ</div>
    </div>
  );
};

export default PatentsCertifications;
