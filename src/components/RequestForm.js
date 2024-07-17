import React, { useState } from 'react';
import '../css/RequestForm.css';
import { useTranslation } from 'react-i18next';

function RequestForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://us-central1-eandtech-f8efe.cloudfunctions.net/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert(t('견적 요청이 성공적으로 제출되었습니다!'));
                setFormData({ subject: '', name: '', phone: '', email: '', message: '' });
            } else {
                alert(t('견적 요청 제출에 실패했습니다.'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert(t('견적 요청 제출에 실패했습니다.'));
        }
    };

    return (
        <div>
            <div>ㅤ</div>
            <form className="request-form" onSubmit={handleSubmit}>
                <h2>{t('견적 의뢰')}</h2>
                <div>ㅤ</div>
                <input
                    type="text"
                    name="subject"
                    placeholder={t('제목을 입력해주세요.')}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder={t('이름을 입력해주세요.')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder={t('휴대폰 번호를 입력해주세요.')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t('연락 받으실 이메일 주소를 입력해주세요.')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder={t('내용을 입력해주세요.')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{t('제출')}</button>
            </form>
            <div>ㅤ</div>
        </div>
    );
}

export default RequestForm;
