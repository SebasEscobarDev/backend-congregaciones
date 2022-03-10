import MonedaModel from './ORM/Moneda';
import { literal, cast, col } from 'sequelize'

class Moneda {
    
    async getMonedas(){
        return await MonedaModel.findAll({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getMoneda(id){
        return await MonedaModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createMoneda(body){
        return await MonedaModel.create({ 
                name: body.name,
                congregacion_id: body.congregacion_id
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        ).catch(error => { console.log(error) });
    }

    async updateMoneda(id,body){
        return await MonedaModel.update({ 
                name: body.name,
                congregacion_id: body.congregacion_id
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                where: { id }, 
                returning: true 
            }
        ).catch(error => { console.log(error) });
    }

    async deleteMoneda(id){
        return await MonedaModel.destroy({ 
            where: { id }
        })
    }
}

export default Moneda;