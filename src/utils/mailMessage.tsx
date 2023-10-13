export function mail({name, company, email, phone, message}:{
  name:string,
  company:string, 
  email:string,
  phone:string,
  message:string
}) {
  return(
    `<div style="font-family: sans-serif">
      <h1>Novo contato realizado a partir da página web!</h1>
      <table style="border-collapse: collapse; margin-bottom: 12px;">
        <tr>
          <th style="background-color: #d5d5d5; text-align: left; width: 50%; border: 1px solid rgb(190, 190, 190); padding: 12px;">Nome</th>
          <th style="background-color: #d5d5d5; text-align: left; width: 200px; border: 1px solid rgb(190, 190, 190); padding: 12px;">Empresa</th>
        </tr>
        <tr>
          <td style="width: 300px; border: 1px solid rgb(190, 190, 190); padding: 12px;">${name}</td>
          <td style="width: 300px; border: 1px solid rgb(190, 190, 190); padding: 12px;">${company}</td>
        </tr>
      </table>
      <table style="border-collapse: collapse; margin-bottom: 12px;">
        <tr>
          <th style="background-color: #d5d5d5; text-align: left; width: 200px; border: 1px solid rgb(190, 190, 190); padding: 12px;">E-mail</th>
          <th style="background-color: #d5d5d5; text-align: left; width: 200px; border: 1px solid rgb(190, 190, 190); padding: 12px;">Telefone</th>
        </tr>
        <tr>
          <td style="width: 300px; border: 1px solid rgb(190, 190, 190); padding: 12px;">${email}</td>
          <td style="width: 300px; border: 1px solid rgb(190, 190, 190); padding: 12px;">${phone}</td>
        </tr>
      </table>
      <table style="border-collapse: collapse; margin-bottom: 12px;">
        <tr>
          <th style="background-color: #d5d5d5; text-align: left; width: 200px; border: 1px solid rgb(190, 190, 190); padding: 12px;">Mensagem</th>
        </tr>
        <tr>
          <td word-wrap:break-word style="width: 100%; word-break: break-all; height: 100%; max-width: 650px; border: 1px solid rgb(190, 190, 190); padding: 12px;">${message}</td>
        </tr>
      </table>
    </div>`
  )
}