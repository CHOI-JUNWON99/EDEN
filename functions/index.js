const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.sendEmail = functions
  .runWith({ secrets: ["NAVER_EMAIL", "NAVER_PASSWORD"] })
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const naverEmail = process.env.NAVER_EMAIL;
        const naverPassword = process.env.NAVER_PASSWORD;

        if (!naverEmail || !naverPassword) {
          console.error('Missing email credentials');
          return res.status(500).send('이메일 설정이 누락되었습니다.');
        }

        const mailTransport = nodemailer.createTransport({
          host: 'smtp.naver.com',
          port: 465,
          secure: true,
          auth: {
            user: naverEmail,
            pass: naverPassword,
          },
        });

        const { subject, name, phone, email, message } = req.body;

        const mailOptions = {
          from: naverEmail,
          to: 'edenep@naver.com',
          subject: `견적 요청: ${subject}`,
          text: `이름: ${name}\n휴대폰 번호: ${phone}\n이메일: ${email}\n\n내용:\n${message}`,
        };

        await mailTransport.sendMail(mailOptions);
        return res.status(200).send('이메일이 성공적으로 전송되었습니다.');
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('이메일 전송에 실패했습니다.');
      }
    });
  });
