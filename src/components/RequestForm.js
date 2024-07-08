import React, { useState } from 'react';
import '../css/RequestForm.css';

function RequestForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('견적 요청이 성공적으로 제출되었습니다!');
        // 여기에 백엔드로 폼 데이터를 전송하는 로직을 추가할 수 있습니다.
        // 예를 들어, Firebase에 데이터를 저장하거나 이메일로 전송하는 코드를 추가합니다.
        // 지금은 백엔드가 필요하지 않다고 하셔서 주석 처리해둡니다.
        // 백엔드가 준비되면 아래 코드를 사용하세요.

        // fetch('/api/send-email', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     alert('견적 요청이 성공적으로 제출되었습니다!');
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('견적 요청 제출에 실패했습니다.');
        // });

        // 폼 데이터 초기화
        setFormData({ subject: '', name: '', phone: '', email: '', message: '' });
    };

    return (
        <div>
        <div>ㅤ</div>
        <form className="request-form" onSubmit={handleSubmit}>
            <h2>견적 의뢰</h2>
            <div>ㅤ</div>
            <input
                type="text"
                name="subject"
                placeholder="제목을 입력해주세요."
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요."
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="휴대폰 번호를 입력해주세요."
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="연락 받으실 이메일 주소를 입력해주세요."
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="내용을 입력해주세요."
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">제출</button>
        </form>
        <div>ㅤ</div>
        </div>
    );
}

export default RequestForm;
