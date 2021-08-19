import MonedaModel from './ORM/Moneda';
import { literal, cast, col } from 'sequelize'

class Moneda {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getMonedas(){
        return await MonedaModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        }).catch(error => {
            console.log(error)
        })
    }

    async getMoneda(id){
        return await MonedaModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        }).catch(error => {
            console.log(error)
        })
    }

    async createMoneda(body){
        return await MonedaModel.create({ 
                name: body.name,
                cop_value: body.cop_value,
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
                cop_value: body.cop_value,
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