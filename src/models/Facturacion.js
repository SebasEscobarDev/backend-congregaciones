import FacturacionModel from './ORM/Facturacion';

class Facturacion {
    constructor(){
        this.mivareable = '"dofus"';
    }

    async getFacturaciones(){
        return await FacturacionModel.findAll({
            include: [
                { assosiation: 'contacto' , attributes: ['name'] },
                { assosiation: 'maestro' , attributes: ['name'] },
                { assosiation: 'card' , attributes: ['name'] },
                { assosiation: 'moneda' , attributes: ['name'] },
                { assosiation: 'estado' , attributes: ['name'] },
                { assosiation: 'congregacion' , attributes: ['name'] },
            ],
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        }).catch(error => { console.log(error) })
    }

    async getFacturacion(id){
        return await FacturacionModel.findOne({
            include: [
                { assosiation: 'contacto' , attributes: ['name'] },
                { assosiation: 'maestro' , attributes: ['name'] },
                { assosiation: 'card' , attributes: ['name'] },
                { assosiation: 'moneda' , attributes: ['name'] },
                { assosiation: 'estado' , attributes: ['name'] },
                { assosiation: 'congregacion' , attributes: ['name'] },
            ],
            where: { id },
            raw: true 
        }).catch(error => { console.log(error) })
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
                    { assosiation: 'contacto' , attributes: ['name'] },
                    { assosiation: 'maestro' , attributes: ['name'] },
                    { assosiation: 'card' , attributes: ['name'] },
                    { assosiation: 'moneda' , attributes: ['name'] },
                    { assosiation: 'estado' , attributes: ['name'] },
                    { assosiation: 'congregacion' , attributes: ['name'] },
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
                    { assosiation: 'contacto' , attributes: ['name'] },
                    { assosiation: 'maestro' , attributes: ['name'] },
                    { assosiation: 'card' , attributes: ['name'] },
                    { assosiation: 'moneda' , attributes: ['name'] },
                    { assosiation: 'estado' , attributes: ['name'] },
                    { assosiation: 'congregacion' , attributes: ['name'] }
                ],
                returning: true,
                raw: true
            }
        ).catch(error => { console.log(error) })
    }

    async deleteFacturacion(id){
        return await FacturacionModel.destroy({ 
            where: { id }
        }).catch(error => { console.log(error) })
    }
}

export default Facturacion;