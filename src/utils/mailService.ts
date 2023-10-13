import nodemailer from 'nodemailer'
import { mail } from './mailMessage'

export async function sendMail({name, company, email, phone, message}:{
  name: string,
  company: string,
  email: string,
  phone: string, 
  message: string
}) {

  // const transporter = nodemailer.createTransport({
  //   service:'gmail',
  //   auth: {
  //     user: '',
  //     pass: ''
  //   }
  // })
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWD,
    },
  })

  const mailOptions = {
    from: 'contato@cr3auditoria.com.br',
    to: 'contato@cr3auditoria.com.br',
    subject: 'Um novo contato vindo do site!',
    html: mail({name, company, email, phone, message})
  }

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     throw new Error();
  //   } else {
  //     console.log("Email Sent");
  //     return true;
  //   }
  // })

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    })
  })
}