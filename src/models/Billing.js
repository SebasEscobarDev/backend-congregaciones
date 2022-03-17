import BillingModel from './ORM/Billing'
import moment from 'moment'

class Billing {
    async getBillings(){
        return await BillingModel.findAll({
            include: [
                { association: 'master' , attributes: ['name'] },
                { association: 'currency' , attributes: ['name'] },
                {
                    association: 'card' ,
                    attributes: ['values'],
                    include: [
                        { association: 'cardtype', attributes: ['name','fields'] }
                    ]
                },
                { association: 'contact' , attributes: ['name'] },
                { association: 'billingstatus' , attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getBilling(id){
        return await BillingModel.findOne({
            include: [
                { association: 'master' , attributes: ['name'] },
                { association: 'currency' , attributes: ['name'] },
                {
                    association: 'card' ,
                    attributes: ['values'],
                    include: [
                        { association: 'cardtype', attributes: ['name','fields'] }
                    ]
                },
                { association: 'contact' , attributes: ['name'] },
                { association: 'billingstatus' , attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createBilling(body){
        return await BillingModel.create({ 
                currency_value: body.currency_value,
                cop_value: body.cop_value,
                created_at: moment(new Date()).zone('-0500').format("YYYY-MM-DD hh:mm:ss"),
                updated_at: moment(new Date()).zone('-0500').format("YYYY-MM-DD hh:mm:ss"),
                master_id: body.master_id,
                currency_id: body.currency_id,
                card_id: body.card_id,
                contact_id: body.contact_id,
                billingstatus_id: body.billingstatus_id
            },
            {
                include: [
                    { association: 'master' , attributes: ['name'] },
                    { association: 'currency' , attributes: ['name'] },
                    {
                        association: 'card' ,
                        attributes: ['values'],
                        include: [
                            { association: 'cardtype', attributes: ['name','fields'] }
                        ]
                    },
                    { association: 'contact' , attributes: ['name'] },
                    { association: 'billingstatus' , attributes: ['name'] },
                ],
                raw: true
            }
        ).catch(error => { console.log(error); });
    }

    async updateBilling(id, body){
        return await BillingModel.update({ 
                currency_value: body.currency_value,
                cop_value: body.cop_value,
                updated_at: moment(new Date()).zone('-0500').format("YYYY-MM-DD hh:mm:ss"),
                master_id: body.master_id,
                currency_id: body.currency_id,
                card_id: body.card_id,
                contact_id: body.contact_id,
                billingstatus_id: body.billingstatus_id
            },
            { 
                where : { id },
                include: [
                    { association: 'master' , attributes: ['name'] },
                    { association: 'currency' , attributes: ['name'] },
                    {
                        association: 'card' ,
                        attributes: ['values'],
                        include: [
                            { association: 'cardtype', attributes: ['name','fields'] }
                        ]
                    },
                    { association: 'contact' , attributes: ['name'] },
                    { association: 'billingstatus' , attributes: ['name'] },
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteBilling(id){
        return await BillingModel.destroy({ 
            where: { id }
        })
    }
}

export default Billing;