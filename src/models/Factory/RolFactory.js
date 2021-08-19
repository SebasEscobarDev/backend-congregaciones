import RolModel from '../Rol';
const rol = new RolModel();

class Rol {
    
    static async getRoles() {
        return await rol.getRoles();
    }

    static async getRol(id){
        return await rol.getRol(id);
    }

    static async createRol(name) {
        return await rol.createRol(name);
    }

    static async updateRol(id, name) {
        return await rol.updateRol(id, name);
    }

    static async deleteRol(id){
        return await rol.deleteRol(id)
    }

}

export default Rol;