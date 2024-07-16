const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true }); // CORS 설정 추가

admin.initializeApp();

const naverEmail = functions.config().naver.email;
const naverPassword = functions.config().naver.password;

const mailTransport = nodemailer.createTransport({
  host: 'smtp.naver.com',
  port: 465,
  secure: true,
  auth: {
    user: naverEmail,
    pass: naverPassword,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { subject, name, phone, email, message } = req.body;

    const mailOptions = {
      from: naverEmail,
      to: 'edenep@naver.com',
      subject: `견적 요청: ${subject}`,
      text: `이름: ${name}\n휴대폰 번호: ${phone}\n이메일: ${email}\n\n내용:\n${message}`,
    };

    return mailTransport.sendMail(mailOptions)
      .then(() => {
        return res.status(200).send('이메일이 성공적으로 전송되었습니다.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        return res.status(500).send('이메일 전송에 실패했습니다.');
      });
  });
});
