import nodemailer from 'nodemailer'

export async function sendMail({name, company, email, phone, message}:{
  name: string,
  company: string,
  email: string,
  phone: string, 
  message: string
}) {

  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'darlan.mpaz@gmail.com',
      pass: 'xjcuktangvpmbkey'
    }
  })

  const mailOptions = {
    from: 'darlan.mpaz@gmail.com',
    to: 'darlanmpaz123@gmail.com',
    subject: 'Um novo contato vindo do Website!',
    html: `
    <h3>Hello Darlan</h3>
    <ul>
      <li>Customer: ${name}</li>
      <li>Company: ${company}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
      <li>Message: ${message}</li>
    </ul>`
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