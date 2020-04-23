import {Request, Response} from 'express';
import EmailService from '../services/EmailService';
import slotModel from '../models/Slot';
import size from '../utils/enumarates/SizeSlot';
import typeOfCardsAllowed from '../utils/enumarates/TypeOfCardsAllowed';

import card from '../utils/classes/Card';

const users = {
    nome: 'Alexandre', email: 'algomes.ti@gmail.com'
};


let cardMaster  = new card(100);
let cardSlave1  = new card(10);
let cardSlave2  = new card(20);
let cardSlave3  = new card(200);
let cardSlave3x = new card(200);
let cardSlave11 = new card(30);

cardSlave1.add(cardSlave11);
cardMaster.add(cardSlave1);
cardSlave2.add(cardSlave3);
cardMaster.add(cardSlave2);

let forceA = cardMaster.getForce();

cardSlave11.add(cardSlave3);
cardSlave11.add(cardSlave3x);

let forceD = cardMaster.getForce();
cardMaster.remove(cardSlave3x);
let forceD1 = cardMaster.getForce();

console.log("force", forceA);
console.log("force", forceD);
console.log("force", forceD1);

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