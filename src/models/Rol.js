import RolModel from './ORM/Rol';
import { literal, cast, col } from 'sequelize'

class Rol {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getRoles(){
        return await RolModel.findAll({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async getRol(id){
        return await RolModel.findOne({
            include: [
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async createRol(body){
        return await RolModel.create({ 
                name: body.name,
                congregacion_id: body.congregacion_id
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        ).catch(error => { console.log(error) })
    }

    async updateRol(id,body){
        return await RolModel.update({ 
                name: body.name
            },{ 
                include: [
                    { association: 'congregacion', attributes: ['name'] },
                ],
                where: { id }, 
                returning: true 
            }
        ).catch(error => { console.log(error) })
    }

    async deleteRol(id){
        return await RolModel.destroy({ 
            where: { id }
        }).catch(error => { console.log(error) })
    }
}

export default Rol;