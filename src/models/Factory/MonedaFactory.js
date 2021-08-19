import MonedaModel from '../Moneda';
const moneda = new MonedaModel();

class Moneda {
    
    static async getMonedas() {
        return await moneda.getMonedas();
    }

    static async getMoneda(id){
        return await moneda.getMoneda(id);
    }

    static async createMoneda(name) {
        return await moneda.createMoneda(name);
    }

    static async updateMoneda(id, name) {
        return await moneda.updateMoneda(id, name);
    }

    static async deleteMoneda(id){
        return await moneda.deleteMoneda(id)
    }

}

export default Moneda;