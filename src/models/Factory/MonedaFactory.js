import MonedaModel from '../Moneda';
const moneda = new MonedaModel();

class Moneda {
    
    static async getMonedas() {
        return await moneda.getMonedas();
    }

    static async getMoneda(id){
        return await moneda.getMoneda(id);
    }

    static async createMoneda(body) {
        return await moneda.createMoneda(body);
    }

    static async updateMoneda(id, body) {
        return await moneda.updateMoneda(id, body);
    }

    static async deleteMoneda(id){
        return await moneda.deleteMoneda(id)
    }

}

export default Moneda;