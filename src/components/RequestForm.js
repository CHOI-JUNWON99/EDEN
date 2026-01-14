import React from 'react';
import '../css/RequestForm.css';
import { useTranslation } from 'react-i18next';

function RequestForm() {
    const { t } = useTranslation();

    return (
        <div className="request-page">
            <div className="request-content">
                <div className="request-card">
                    <div className="request-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>

                    <h2>{t('이메일로 문의해주세요')}</h2>

                    <p className="request-description">
                        {t('견적 문의, 기술 상담, 협력 제안 등 어떤 문의든 환영합니다.')}
                        <br />
                        {t('이메일을 보내주시면 빠르게 응대해드리겠습니다.')}
                    </p>

                    <a href="mailto:edenep@naver.com" className="email-link">
                        edenep@naver.com
                    </a>

                    <div className="contact-info">
                        <div className="contact-item">
                            <strong>{t('전화')}</strong>
                            <span>02-2047-0987~8</span>
                        </div>
                        <div className="contact-item">
                            <strong>{t('팩스')}</strong>
                            <span>02-2047-0989</span>
                        </div>
                    </div>

                    <p className="request-note">
                        {t('영업일 기준 24시간 이내 답변드립니다.')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RequestForm;
