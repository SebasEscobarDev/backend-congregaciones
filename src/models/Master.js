import MasterModel from './ORM/Master';
import moment from 'moment'
import { literal, cast, col } from 'sequelize'
import bcrypt from 'bcryptjs'


class Master {

    async login(phone){
        return await MasterModel.findOne({
            where: { phone: phone },
            raw: true
        })
    }

    async getMasterLogin(req,res) {
        
    }

    async getMasters(){
        return await MasterModel.findAll({
            include: [
                { association: 'rol', attributes: ['name'] }
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getMaster(id){
        return await MasterModel.findOne({
            include: [
                { association: 'rol', attributes: ['name'] }
            ],
            where: { id },
            raw: true 
        })
    }

    async createMaster(body){
        const hashPass = await bcrypt.hash(body.password, 12)
        return await MasterModel.create({ 
                name:               body.name,
                phone:              body.phone,
                image:              body.image,
                password:           hashPass,
                active:             body.active,
                rol_id:             body.rol_id,
                created_at:         moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                updated_at:         moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
            },
            {
                include: [
                    { association: 'rol', attributes: ['name'] },
                ],
                raw: true 
            }
        )
    }

    async updateMaster(id, body){
        return await MasterModel.update({ 
                name:               body.name,
                phone:              body.phone,
                image:              body.image,
                active:             body.active,
                rol_id:             body.rol_id,
                updated_at:         moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
            },
            { 
                where : { id },
                include: [
                    { association: 'rol', attributes: ['name'] }
                ],
                returning: true,
                raw: true
            }
        )
    }

    async updateMasterWithPass(id, body){
        const hashPass = await bcrypt.hash(body.password, 12)
        return await MasterModel.update({ 
                name:               body.name,
                phone:              body.phone,
                image:              body.image,
                password:           hashPass,
                active:             body.active,
                rol_id:             body.rol_id,
                updated_at:         moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
            },
            { 
                where : { id },
                include: [
                    { association: 'rol', attributes: ['name'] }
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteMaster(id){
        return await MasterModel.destroy({ 
            where: { id }
        }).catch(error => { console.log(error) });
    }
}

export default Master;