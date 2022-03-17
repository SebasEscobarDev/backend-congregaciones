import CurrencyModel from '../Currency';
const currency = new CurrencyModel();

class Currency {
    
    static async getCurrencies() {
        return await currency.getCurrencies();
    }

    static async getCurrency(id){
        return await currency.getCurrency(id);
    }

    static async createCurrency(body) {
        return await currency.createCurrency(body);
    }

    static async updateCurrency(id, body) {
        return await currency.updateCurrency(id, body);
    }

    static async deleteCurrency(id){
        return await currency.deleteCurrency(id)
    }

}

export default Currency;