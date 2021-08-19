import CongregacionModel from './ORM/Congregacion';
import { literal, cast, col } from 'sequelize'

class Congregacion {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getCongregaciones(){
        return await CongregacionModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true
        }).catch(error => { console.log(error) })
    }

    async getCongregacion(id){
        return await CongregacionModel.findOne({
            where: { id },
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async createCongregacion(body){
        return await CongregacionModel.create({ 
                name: body.name,
                active: body.active
            },
            { raw: true }
        ).catch(error => { console.log(error); });
    }

    async updateCongregacion(id, body){
        return await CongregacionModel.update({ 
                name: body.name,
                active: body.active
            },
            { where: { id }, returning: true }
        ).catch(error => { console.log(error); });
    }

    async deleteCongregacion(id){
        return await CongregacionModel.destroy({ 
            where: { id }
        })
    }
}

export default Congregacion;