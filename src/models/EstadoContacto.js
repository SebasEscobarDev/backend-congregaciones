import EstadoContactoModel from './ORM/EstadoContacto';
import { literal, cast, col } from 'sequelize'

class EstadoContacto {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getEstadosContacto(){
        return await EstadoContactoModel.findAll({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getEstadoContacto(id){
        return await EstadoContactoModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createEstadoContacto(body){
        return await EstadoContactoModel.create({ 
                name: body.name,
                plural_name: body.plural_name,
                congregacion_id: body.congregacion_id
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        )
    }

    async updateEstadoContacto(id,body){
        return await EstadoContactoModel.update({ 
                name: body.name,
                plural_name: body.plural_name
            },{ where: { id }, returning: true }
        )
    }

    async deleteEstadoContacto(id){
        return await EstadoContactoModel.destroy({ 
            where: { id }
        })
    }
}

export default EstadoContacto;