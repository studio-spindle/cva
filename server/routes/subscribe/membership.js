const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');

router.post('/', (req, res) => {
  const {
    MEMBERSHIP,
    SALUTATION,
    FNAME,
    LNAME,
    COMPANY,
    TITLE,
    EMAIL,
  } = req.body;

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GOOGLE_ACCOUNT,
        pass: process.env.GOOGLE_PASSWORD
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  });

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

  const mailList =
    process.env.NODE_ENV === 'development'
      ? [
        process.env.EMAIL_TO_1
      ] : [
        process.env.EMAIL_TO_1,
        process.env.EMAIL_TO_2,
        process.env.EMAIL_TO_3,
        process.env.EMAIL_TO_4
      ];

  mailList.forEach((email) => {
    transporter.sendMail({ to: email, ...mailOptions}, (error, info) => {
      console.log(info);
      if (error) {
        res.status(500).send({ error });
      } else {
        res.status(200).send({ message: 'Message %s sent: %s' });
      }
    })
  });
});

module.exports = router;
