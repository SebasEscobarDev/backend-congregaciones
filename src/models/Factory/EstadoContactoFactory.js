import EstadoContactoModel from '../EstadoContacto';
const estadoContacto = new EstadoContactoModel();

class EstadoContacto {
    
    static async getEstadosContacto() {
        return await estadoContacto.getEstadosContacto();
    }

    static async getEstadoContacto(id){
        return await estadoContacto.getEstadoContacto(id);
    }

    static async createEstadoContacto(name) {
        return await estadoContacto.createEstadoContacto(name);
    }

    static async updateEstadoContacto(id, name) {
        return await estadoContacto.updateEstadoContacto(id, name);
    }

    static async deleteEstadoContacto(id){
        return await estadoContacto.deleteEstadoContacto(id)
    }

}

export default EstadoContacto;