import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  // PEGA INFOS DA REQUISIÇÃO
  const {name, company, email, phone, message} = await request.json()
  // CONFIGURAÇÃO DO SERVIDOR DE E-MAIL
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW
    }
  })
  // CONFIGURAÇÃO DA MENSAGEM
  const mailOption = {
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
  // ENVIO DO E-MAIL
  const sendEmail = async () => {
    try {
      console.log('enviando e-mail')
      await transporter.sendMail(mailOption)
      console.log('E-mail enviado!')
      process.exit()
    } catch (error) {
      console.log('Deu erro :(')
      console.log(error)
    }
  }
  sendEmail()
}