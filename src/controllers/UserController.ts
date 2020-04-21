import {Request, Response} from 'express';
import EmailService from '../services/EmailService';
import slotModel from '../models/Slot';
import size from '../utils/enumarates/SizeSlot';
import typeOfCardsAllowed from '../utils/enumarates/TypeOfCardsAllowed';

const users = {
    nome: 'Alexandre', email: 'algomes.ti@gmail.com'
};

const slot = new slotModel({
    title : "Escudo",
    size : [
        size.Big,
        size.Medium
    ],
    typesOfCardsAllowed : [
        typeOfCardsAllowed.Attack,
        typeOfCardsAllowed.Defense
    ]
});


console.log(slot);

export default {
    async index(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail(
            {
                to: {
                    name: users.nome,
                    email: users.email
                },
                message: {
                    subject: 'Email Criado',
                    body: 'Email criado com sucesso',
                }
            }
        )
        res.send('sucesso');
    }
}