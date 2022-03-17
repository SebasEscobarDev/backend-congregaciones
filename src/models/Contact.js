import ContactModel from './ORM/Contact';
import moment from 'moment'
import { literal, cast, col, fn } from 'sequelize'

class Contact {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getContacts(){
        return await ContactModel.findAll({
            include: [
                { association: 'contactstatus', attributes: ['name'] },
                { association: 'master', attributes: ['name'] }
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getContact(id){
        return await ContactModel.findOne({
            include: [
                { association: 'contactstatus', attributes: ['name'] },
                { association: 'master', attributes: ['name'] }
            ],
            where: { id },
            raw: true 
        })
    }

    async createContact(body){
        return await ContactModel.create({ 
                from: body.from,
                name: body.name,
                phone: body.phone,
                country: body.country,
                last_send: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                created_at: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                updated_at: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                master_id: body.master_id,
                contactstatus_id: body.contactstatus_id
            },
            {
                include: [
                    { association: 'contactstatus', attributes: ['name'] },
                    { association: 'master', attributes: ['name'] }
                ],
                raw: true 
            }
        )
    }

    async updateContact(id, body){
        return await ContactModel.update({ 
                from: body.from,
                name: body.name,
                phone: body.phone,
                country: body.country,
                updated_at: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                master_id: body.master_id,
                contactstatus_id: body.contactstatus_id
            },{ 
                where : { id },
                include: [
                    { association: 'contactstatus', attributes: ['name'] },
                    { association: 'master', attributes: ['name'] }
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteContact(id){
        return await ContactModel.destroy({ 
            where: { id }
        })
        
    }
}

export default Contact;