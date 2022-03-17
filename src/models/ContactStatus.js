import ContactStatusModel from './ORM/ContactStatus';
import { literal, cast, col } from 'sequelize'

class ContactStatus {

    async getContactStatus(){
        return await ContactStatusModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getContactStatusOne(id){
        return await ContactStatusModel.findOne({
            where: { id },
            raw: true 
        })
    }

    async createContactStatus(body){
        return await ContactStatusModel.create({ 
                name: body.name,
                plural_name: body.plural_name
            },{ 
                raw: true 
            }
        )
    }

    async updateContactStatus(id,body){
        return await ContactStatusModel.update({ 
                name: body.name,
                plural_name: body.plural_name
            },{ where: { id }, returning: true }
        )
    }

    async deleteContactStatus(id){
        return await ContactStatusModel.destroy({ 
            where: { id }
        })
    }
}

export default ContactStatus;