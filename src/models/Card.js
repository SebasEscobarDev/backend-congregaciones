import CardModel from './ORM/Card';
import { literal, cast, col, json } from 'sequelize'

class Card {

    async getCards(){
        return await CardModel.findAll({
            include: [
                { association: 'cardtype', attributes: ['name','fields'] }
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getCard(id){
        return await CardModel.findOne({
            include: [
                { association: 'cardtype', attributes: ['name','fields'] }
            ],
            where: { id },
            raw: true 
        })
    }

    async createCard(body){
        return await CardModel.create({ 
                active: body.active,
                values: body.values,
                cardtype_id: body.cardtype_id
            },
            { 
                include: [
                    { association: 'cardtype', attributes: ['name','fields'] }
                ],
                raw: true,
                returning: true
            }
        )
    }

    async updateCard(id, body){
        return await CardModel.update({ 
                active: body.active,
                values: body.values,
                cardtype_id: body.cardtype_id,
            },
            { 
                where : { id },
                include: [
                    { association: 'cardtype', attributes: ['name','fields'] }
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteCard(id){
        return await CardModel.destroy({ 
            where: { id }
        })
    }
}

export default Card;