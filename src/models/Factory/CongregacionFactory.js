import CongregacionModel from '../Congregacion';
const congregacion = new CongregacionModel();

class Congregacion {
    
    static async getCongregaciones() {
        return await congregacion.getCongregaciones();
    }

    static async getAllCongregaciones() {
        return await congregacion.getAllCongregaciones();
    }

    static async getCongregacion(id){
        return await congregacion.getCongregacion(id);
    }

    static async createCongregacion(body) {
        return await congregacion.createCongregacion(body);
    }

    static async updateCongregacion(id, body) {
        return await congregacion.updateCongregacion(id, body);
    }

    static async deleteCongregacion(id){
        return await congregacion.deleteCongregacion(id)
    }
    
}

export default Congregacion;