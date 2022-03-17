import EstadoFacturacionModel from '../BillingStatus';
const estadoFacturacion = new EstadoFacturacionModel();

class BillingStatus {
    
    static async getBillingStatuses() {
        return await estadoFacturacion.getBillingStatuses();
    }

    static async getBillingStatus(id){
        return await estadoFacturacion.getBillingStatus(id);
    }

    static async createBillingStatus(name) {
        return await estadoFacturacion.createBillingStatus(name);
    }

    static async updateBillingStatus(id, name) {
        return await estadoFacturacion.updateBillingStatus(id, name);
    }

    static async deleteBillingStatus(id){
        return await estadoFacturacion.deleteBillingStatus(id)
    }

}

export default BillingStatus;