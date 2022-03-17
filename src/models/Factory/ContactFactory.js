import ContactModel from '../Contact';
const contact = new ContactModel();

class Contact {
    
    static async getContacts() {
        return await contact.getContacts();
    }

    static async getContact(id){
        return await contact.getContact(id);
    }

    static async createContact(body) {
        return await contact.createContact(body);
    }

    static async updateContact(id, body) {
        return await contact.updateContact(id, body);
    }

    static async deleteContact(id){
        return await contact.deleteContact(id)
    }
    
}

export default Contact;