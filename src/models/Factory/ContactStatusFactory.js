import ContactStatusModel from '../ContactStatus';
const contactStatus = new ContactStatusModel();

class ContactStatus {
    
    static async getContactStatus() {
        return await contactStatus.getContactStatus();
    }

    static async getContactStatusOne(id){
        return await contactStatus.getContactStatusOne(id);
    }

    static async createContactStatus(body) {
        return await contactStatus.createContactStatus(body);
    }

    static async updateContactStatus(id, body) {
        return await contactStatus.updateContactStatus(id, body);
    }

    static async deleteContactStatus(id){
        return await contactStatus.deleteContactStatus(id)
    }

}

export default ContactStatus;