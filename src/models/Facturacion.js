import FacturacionModel from './ORM/Facturacion'

class Facturacion {

    async getFacturaciones(){
        return await FacturacionModel.findAll({
            include: [
                { association: 'contacto' , attributes: ['name'] },
                { association: 'user' , attributes: ['name'] },
                { 
                    association: 'card' ,
                    attributes: ['values'],
                    include: [
                        { association: 'typecard', attributes: ['name','fields'] }
                    ]
                },
                { association: 'moneda' , attributes: ['name'] },
                { association: 'estado' , attributes: ['name'] },
                { association: 'congregacion' , attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getFacturacion(id){
        return await FacturacionModel.findOne({
            include: [
                { association: 'contacto' , attributes: ['name'] },
                { association: 'user' , attributes: ['name'] },
                { association: 'card' },
                { association: 'moneda' , attributes: ['name'] },
                { association: 'estado' , attributes: ['name'] },
                { association: 'congregacion' , attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        })
    }

    async createFacturacion(body){
        return await FacturacionModel.create({ 
                contacto_id: body.contacto_id,
                user_id: body.user_id,
                card_id: body.card_id,
                moneda_id: body.moneda_id,
                valor: body.valor,
                estado_id: body.estado_id,
                congregacion_id: body.congregacion_id
            },
            {
                include: [
                    { association: 'contacto' , attributes: ['name'] },
                    { association: 'user' , attributes: ['name'] },
                    { association: 'card' },
                    { association: 'moneda' , attributes: ['name'] },
                    { association: 'estado' , attributes: ['name'] },
                    { association: 'congregacion' , attributes: ['name'] }
                ],
                raw: true
            }
        ).catch(error => { console.log(error); });
    }

    async updateFacturacion(id, body){
        return await FacturacionModel.update({ 
                contacto_id: body.contacto_id,
                user_id: body.user_id,
                card_id: body.card_id,
                moneda_id: body.moneda_id,
                valor: body.valor,
                estado_id: body.estado_id
            },
            { 
                where : { id },
                include: [
                    { association: 'contacto' , attributes: ['name'] },
                    { association: 'user' , attributes: ['name'] },
                    { association: 'card' },
                    { association: 'moneda' , attributes: ['name'] },
                    { association: 'estado' , attributes: ['name'] },
                    { association: 'congregacion' , attributes: ['name'] }
                ],
                returning: true,
                raw: true
            }
        )
    }

    async deleteFacturacion(id){
        return await FacturacionModel.destroy({ 
            where: { id }
        })
    }
}

export default Facturacion;