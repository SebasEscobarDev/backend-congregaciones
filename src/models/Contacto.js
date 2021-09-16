import ContactoModel from './ORM/Contacto';
import { literal, cast, col } from 'sequelize'

class Contacto {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getContactos(){
        return await ContactoModel.findAll({
            include: [
                { association: 'estado', attributes: ['name'] },
                { association: 'user', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getContacto(id){
        return await ContactoModel.findOne({
            include: [
                { association: 'estado', attributes: ['name'] },
                { association: 'user', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createContacto(body){
        return await ContactoModel.create({ 
                from: body.from,
                name: body.name,
                phone: body.phone,
                country: body.country,
                estadocontacto_id: body.estadocontacto_id,
                user_id: body.user_id,
                congregacion_id: body.congregacion_id
            },
            { 
                include: [
                    { association: 'estado', attributes: ['name'] },
                    { association: 'user', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        )
    }

    async updateContacto(id, body){
        return await ContactoModel.update({ 
                from: body.from,
                name: body.name,
                phone: body.phone,
                country: body.country,
                estadocontacto_id: body.estadocontacto_id,
                user_id: body.user_id
            },{ 
                where : { id },
                include: [
                    { association: 'estado', attributes: ['name'] },
                    { association: 'user', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteContacto(id){
        return await ContactoModel.destroy({ 
            where: { id }
        })
        
    }
}

export default Contacto;