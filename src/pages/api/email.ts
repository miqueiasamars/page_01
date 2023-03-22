import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

type ResponseData = {
  message: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const { nome, email, telefone, titulo, descricao } = req.body
    console.log(nome, email, telefone, titulo, descricao)

    const msg = {
        texto:
        `<header style="background-color: #796A37; color: #ffffff;">
        <div style="padding: 2% 10%; border-radius: 10px; font-size: 20px;">Olá, LL CONSTRUTORA</div>
        </header>
        <article>
        <div style="padding: 5% 10%;">
            <h4 style="color: #796A37; font-size: 18px;">Formulário de contato</h4>
            <h4 style="color:black; padding-top: 25px;">Nome: ${nome}</h4>
            <h4 style="color:black; padding-top: 25px;">E-mail: ${email}</h4>
            <h4 style="color:black; padding-top: 25px;">Telefone: ${telefone}</h4>
            <h4 style="color:black; padding-top: 25px;">Título: ${titulo}</h4>
            <h4 style="color:black; padding-top: 25px;">Descrição: ${descricao}</h4>
        </div>
            <P style=" color: #796A37;">Att,</P>
            <P style=" color: #796A37;">Equipe Centrall Soluções Tecnológicas</P>
        </article><br/><br/><br/>
        <hr style="background-color: #796A37;">
        <footer style="color:black; padding: 10px;">
            <h4>Siga nossas redes sociais:</h4>
            <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">INSTAGRAM</a></h5>
            <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">YOUTUBE</a></h5>
            <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">FACEBOOK</a></h5>
        </footer>
        <hr style="background-color: #796A37;">`
        }

    const transport = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 587,
        secure: false,
        auth: {
          user: "comercial@llconstrutora.com.br",
          pass: "llconstrutora@1824"
        },
        tls: { rejectUnauthorized: false }
      });      
          
    transport.sendMail({
        from: `SITE | LL CONSTRUTORA <comercial@llconstrutora.com.br>`,
        to: 'll.construtoraltda@hotmail.com',
        subject: 'Formulário Site',
        text: "",
        html: msg.texto,
        }).then((message: any) =>{
        console.log(message)
        }).catch((err: any) => {
        console.log(err)
        }) 

  res.status(200).json({ message: 'Hello from Next.js!' })
}