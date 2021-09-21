import UserModel from './ORM/User';
import { literal, cast, col } from 'sequelize'
import bcrypt from 'bcryptjs'


class User {

    async login(email){
        return await UserModel.findOne({
            where: { email: email },
            raw: true
        })
    }

    async getUserLogin(req,res) {
        
    }

    async getUsers(){
        return await UserModel.findAll({
            include: [
                { association: 'rol', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getUser(id){
        return await UserModel.findOne({
            include: [
                { association: 'rol', attributes: ['name'] },
                { association: 'congregacion', attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createUser(body){
        const hashPass = await bcrypt.hash(body.password, 12)
        return await UserModel.create({ 
                name:               body.name,
                email:              body.email,
                password:           hashPass,
                active:             body.active,
                rol_id:             body.rol_id,
                congregacion_id:    body.congregacion_id,
            },
            {
                include: [
                    { association: 'rol', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                raw: true 
            }
        )
    }

    async updateUser(id, body){
        const hashPass = await bcrypt.hash(body.password, 12)
        return await UserModel.update({ 
                name: body.name,
                email: body.email,
                password: hashPass,
                active: body.active,
                rol_id: body.rol_id
            },
            { 
                where : { id },
                include: [
                    { association: 'rol', attributes: ['name'] },
                    { association: 'congregacion', attributes: ['name'] },
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteUser(id){
        return await UserModel.destroy({ 
            where: { id }
        })
    }
}

export default User;