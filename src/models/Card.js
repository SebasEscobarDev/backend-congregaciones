import CardModel from './ORM/Card';
import { literal, cast, col, json } from 'sequelize'

class Card {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getCards(){
        return await CardModel.findAll({
            include: [
                { association: 'typecard', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async getCard(id){
        return await CardModel.findOne({
            include: [
                { association: 'typecard', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async createCard(body){
        return await CardModel.create({ 
                active: body.active,
                values: body.values,
                typecard_id: body.typecard_id,
                congregacion_id: body.congregacion_id
            },
            { 
                include: [
                    { association: 'typecard', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true,
                returning: true
            }
        ).catch(error => { console.log(error) })
    }

    async updateCard(id, body){
        return await CardModel.update({ 
                active: body.active,
                values: body.values,
                typecard_id: body.typecard_id,
            },
            { 
                where : { id },
                include: [
                    { association: 'typecard', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                returning: true,
                raw: true
            }
        ).catch(error => { console.log(error) })
    }

    async deleteCard(id){
        return await CardModel.destroy({ 
            where: { id }
        })
    }
}

export default Card;