import BillingStatusModel from './ORM/BillingStatus';
import { literal, cast, col } from 'sequelize'

class BillingStatus {

    async getBillingStatuses(){
        return await BillingStatusModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getBillingStatus(id){
        return await BillingStatusModel.findOne({
            where: { id },
            raw: true 
        })
    }

    async createBillingStatus(body){
        return await BillingStatusModel.create({ 
                name: body.name,
                plural_name: body.plural_name
            },{
                raw: true 
            }
        )
    }

    async updateBillingStatus(id,body){
        return await BillingStatusModel.update({ 
                name: body.name,
                plural_name: body.plural_name
            },{
                where: { id },
                returning: true 
            }
        )
    }

    async deleteBillingStatus(id){
        return await BillingStatusModel.destroy({ 
            where: { id }
        })
    }
}

export default BillingStatus;