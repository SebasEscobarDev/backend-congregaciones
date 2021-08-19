import ContactoModel from '../Contacto';
const contacto = new ContactoModel();

class Contacto {
    
    static async getContactos() {
        return await contacto.getContactos();
    }

    static async getContacto(id){
        return await contacto.getContacto(id);
    }

    static async createContacto(body) {
        return await contacto.createContacto(body);
    }

    static async updateContacto(id, body) {
        return await contacto.updateContacto(id, body);
    }

    static async deleteContacto(id){
        return await contacto.deleteContacto(id)
    }
    
}

export default Contacto;