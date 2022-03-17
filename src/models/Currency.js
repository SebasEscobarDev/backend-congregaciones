import CurrencyModel from './ORM/Currency';
import { literal, cast, col } from 'sequelize'

class Currency {
    
    async getCurrencies(){
        return await CurrencyModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true 
        })
    }

    async getCurrency(id){
        return await CurrencyModel.findOne({
            where: { id },
            raw: true 
        })
    }

    async createCurrency(body){
        return await CurrencyModel.create({ 
                name: body.name
            },{
                raw: true 
            }
        ).catch(error => { console.log(error) });
    }

    async updateCurrency(id,body){
        return await CurrencyModel.update({ 
                name: body.name
            },{
                where: { id }, 
                returning: true 
            }
        ).catch(error => { console.log(error) });
    }

    async deleteCurrency(id){
        return await CurrencyModel.destroy({ 
            where: { id }
        }).catch(error => { console.log(error) });
    }
}

export default Currency;