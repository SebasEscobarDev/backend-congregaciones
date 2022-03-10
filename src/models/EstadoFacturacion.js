import EstadoFacturacionModel from './ORM/EstadoFacturacion';
import { literal, cast, col } from 'sequelize'

class EstadoFacturacion {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getEstadosFacturacion(){
        return await EstadoFacturacionModel.findAll({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getEstadoFacturacion(id){
        return await EstadoFacturacionModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createEstadoFacturacion(body){
        return await EstadoFacturacionModel.create({ 
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

    async updateEstadoFacturacion(id,body){
        return await EstadoFacturacionModel.update({ 
                name: body.name,
                plural_name: body.plural_name,
                congregacion_id: body.congregacion_id
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                where: { id },
                returning: true 
            }
        )
    }

    async deleteEstadoFacturacion(id){
        return await EstadoFacturacionModel.destroy({ 
            where: { id }
        })
    }
}

export default EstadoFacturacion;