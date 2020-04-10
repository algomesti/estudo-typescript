interface IMailTo {
    name: string;
    email: string;
}
interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[]
}
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(Request: IMessageDTO) : void;
}

class EmailServices implements IEmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`email enviado para ${to.name}<${to.email}>: ${message.subject}`);
    }
}

export default EmailServices;