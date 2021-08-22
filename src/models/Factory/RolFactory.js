import RolModel from '../Rol';
const rol = new RolModel();

class Rol {
    
    static async getRoles() {
        return await rol.getRoles();
    }

    static async getRol(id){
        return await rol.getRol(id);
    }

    static async createRol(body) {
        return await rol.createRol(body);
    }

    static async updateRol(id, body) {
        return await rol.updateRol(id, body);
    }

    static async deleteRol(id){
        return await rol.deleteRol(id)
    }

}

export default Rol;