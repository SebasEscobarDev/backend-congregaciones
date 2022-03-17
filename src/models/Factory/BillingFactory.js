import BillingModel from '../Billing';
const billing = new BillingModel();

class Billing {
    
    static async getBillings() {
        return await billing.getBillings();
    }

    static async getBilling(id){
        return await billing.getBilling(id);
    }

    static async createBilling(body) {
        return await billing.createBilling(body);
    }

    static async updateBilling(id, body) {
        return await billing.updateBilling(id, body);
    }

    static async deleteBilling(id){
        return await billing.deleteBilling(id)
    }
    
}

export default Billing;