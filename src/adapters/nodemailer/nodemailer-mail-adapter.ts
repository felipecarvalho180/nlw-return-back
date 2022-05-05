import nodemailer from "nodemailer";

import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bbd0a5e42c6bc6",
    pass: "849bf3a843ec15",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendEmailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Felipe Carvalho <felipecarvalho180@gmail.com>",
      subject,
      html: body,
    });
  }
}
