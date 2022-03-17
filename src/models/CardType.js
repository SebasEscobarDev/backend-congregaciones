import CardTypeModel from './ORM/CardType';
import { literal, cast, col, json } from 'sequelize'

class CardType {
    async getCardsTypes(){
        return await CardTypeModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getCardType(id){
        return await CardTypeModel.findOne({
            where: { id },
            raw: true 
        })
    }

    async createCardType(body){
        return await CardTypeModel.create({ 
                name: body.name,
                fields: body.fields
            },
            {
                raw: true 
            }
        )
    }

    async updateCardType(id, body){
        return await CardTypeModel.update({ 
                name: body.name,
                fields: body.fields,
            },
            { 
                where : { id },
                returning: true,
                raw: true
            }
        )
    }

    async deleteCardType(id){
        return await CardTypeModel.destroy({ 
            where: { id }
        })
    }
}

export default CardType;