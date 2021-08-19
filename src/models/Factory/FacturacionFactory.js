import FacturacionModel from '../Facturacion';
const facturacion = new FacturacionModel();

class Facturacion {
    
    static async getFacturaciones() {
        return await facturacion.getFacturaciones();
    }

    static async getFacturacion(id){
        return await facturacion.getFacturacion(id);
    }

    static async createFacturacion(body) {
        return await facturacion.createFacturacion(body);
    }

    static async updateFacturacion(id, body) {
        return await facturacion.updateFacturacion(id, body);
    }

    static async deleteFacturacion(id){
        return await facturacion.deleteFacturacion(id)
    }
    
}

export default Facturacion;