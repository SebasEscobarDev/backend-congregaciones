import TypeCardModel from '../TypeCard';
const typecard = new TypeCardModel();

class TypeCard {
    
    static async getTypesCard() {
        return await typecard.getCards();
    }

    static async getTypeCard(id){
        return await typecard.getTypeCard(id);
    }

    static async createTypeCard(body) {
        return await typecard.createTypeCard(body);
    }

    static async updateTypeCard(id, body) {
        return await typecard.updateTypeCard(id, body);
    }

    static async deleteTypeCard(id){
        return await typecard.deleteTypeCard(id)
    }
    
}

export default TypeCard;