import EstadoFacturacionModel from '../EstadoFacturacion';
const estadoFacturacion = new EstadoFacturacionModel();

class EstadoFacturacion {
    
    static async getEstadosFacturacion() {
        return await estadoFacturacion.getEstadosFacturacion();
    }

    static async getEstadoFacturacion(id){
        return await estadoFacturacion.getEstadoFacturacion(id);
    }

    static async createEstadoFacturacion(name) {
        return await estadoFacturacion.createEstadoFacturacion(name);
    }

    static async updateEstadoFacturacion(id, name) {
        return await estadoFacturacion.updateEstadoFacturacion(id, name);
    }

    static async deleteEstadoFacturacion(id){
        return await estadoFacturacion.deleteEstadoFacturacion(id)
    }

}

export default EstadoFacturacion;