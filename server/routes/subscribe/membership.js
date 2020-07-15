const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const checkEnvVariables = require('../../middleware/checkEnvVariables');

router.use(checkEnvVariables(['GOOGLE_ACCOUNT', 'GOOGLE_PASSWORD', 'EMAIL_TO_1']));

router.post('/', (req, res, next) => {
  const {
    MEMBERSHIP,
    SALUTATION,
    FNAME,
    LNAME,
    COMPANY,
    TITLE,
    EMAIL,
  } = req.body;

  const mailList = process.env.NODE_ENV === 'development'
    ? [
      process.env.EMAIL_TO_1
    ] : [
      process.env.EMAIL_TO_1,
      process.env.EMAIL_TO_2,
      process.env.EMAIL_TO_3,
      process.env.EMAIL_TO_4
    ];

  const mailOptions = {
    from: `creatingvalue.co <${process.env.GOOGLE_ACCOUNT}>`,
    subject: `New member subscription for: ${COMPANY} | ${SALUTATION} ${LNAME}, ${FNAME}`,
    html: `
      <h1>New member</h1>
      <p>I would like to join the Creating Value Alliance.</p>
      <ul>
        <li>Membership: ${MEMBERSHIP}</li>
        <li>Name: ${FNAME} ${LNAME}</li>
        <li>Company: ${COMPANY}</li>
        <li>Title: ${TITLE}</li>
        <li>Email: ${EMAIL}</li>
      </ul>
    `,
  }

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_ACCOUNT,
      pass: process.env.GOOGLE_PASSWORD
    }
  });

  transporter.verify().then(
    () => {
      mailList.forEach((email) => {
        transporter.sendMail({ to: email, ...mailOptions}, (error, info) => {
          if(error) {
            return next(error);
          }
          return res.status(200).send({ message: 'Message %s sent: %s' });
        })
      });
    }
  ).catch((error) => {
    return next(error);
  });

});

module.exports = router;
