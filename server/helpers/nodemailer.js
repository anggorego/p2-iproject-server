const nodemailer = require('nodemailer');

function sendMail(email,title,reply) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gym.freaks.h8@gmail.com',
        pass: 'Gymfreaks1'
      }
    });
  
    let mailOptions = {
      from: 'gym.freaks.h8@gmail.com',
      to: email,
      subject: `You've a reply comment on ${title}`,
      text: `${reply}
      `
    };
  
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
    });
  }

module.exports = sendMail