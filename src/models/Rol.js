import RolModel from './ORM/Rol';
import { literal, cast, col } from 'sequelize'

class Rol {
    async getRoles(){
        return await RolModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getRol(id){
        return await RolModel.findOne({
            where: { id },
            raw: true 
        })
    }

    async createRol(body){
        return await RolModel.create({ 
                name: body.name
            },{ 
                raw: true 
            }
        )
    }

    async updateRol(id,body){
        return await RolModel.update({ 
                name: body.name
            },{ 
                where: { id }, 
                returning: true 
            }
        )
    }

    async deleteRol(id){
        return await RolModel.destroy({ 
            where: { id }
        })
    }
}

export default Rol;