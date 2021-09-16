import TypeCardModel from './ORM/TypeCard';
import { literal, cast, col, json } from 'sequelize'

class TypeCard {
    async getTypesCard(){
        return await TypeCardModel.findAll({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getTypeCard(id){
        return await TypeCardModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createTypeCard(body){
        return await TypeCardModel.create({ 
                name: body.name,
                fields: body.fields,
                congregacion_id: body.congregacion_id,
            },
            { 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        )
    }

    async updateTypeCard(id, body){
        return await TypeCardModel.update({ 
                name: body.name,
                fields: body.fields,
            },
            { 
                where : { id },
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteTypeCard(id){
        return await TypeCardModel.destroy({ 
            where: { id }
        })
    }
}

export default TypeCard;