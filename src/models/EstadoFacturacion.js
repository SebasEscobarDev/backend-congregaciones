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
        }).catch(error => { console.log(error) })
    }

    async getEstadoFacturacion(id){
        return await EstadoFacturacionModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        }).catch( error => { console.log(error) })
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
        ).catch(error => { console.log(error) })
    }

    async updateEstadoFacturacion(id,body){
        return await EstadoFacturacionModel.update({ 
                name: body.name,
                plural_name: body.plural_name
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                where: { id },
                returning: true 
            }
        ).catch(error => { console.log(error) })
    }

    async deleteEstadoFacturacion(id){
        return await EstadoFacturacionModel.destroy({ 
            where: { id }
        }).catch(error => { console.log(error) })
    }
}

export default EstadoFacturacion;