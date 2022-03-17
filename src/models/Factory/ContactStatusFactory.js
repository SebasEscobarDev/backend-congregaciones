import ContactStatusModel from '../ContactStatus';
const contactStatus = new ContactStatusModel();

class ContactStatus {
    
    static async getContactStatus() {
        return await contactStatus.getContactStatus();
    }

    static async getContactStatusOne(id){
        return await contactStatus.getContactStatusOne(id);
    }

    static async createContactStatus(name) {
        return await contactStatus.createContactStatus(name);
    }

    static async updateContactStatus(id, name) {
        return await contactStatus.updateContactStatus(id, name);
    }

    static async deleteContactStatus(id){
        return await contactStatus.deleteContactStatus(id)
    }

}

export default ContactStatus;