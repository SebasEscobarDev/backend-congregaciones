import CardTypeModel from '../CardType';
const cardtype = new CardTypeModel();

class CardType {
    
    static async getCardsTypes() {
        return await cardtype.getCardsTypes();
    }

    static async getCardType(id){
        return await cardtype.getCardType(id);
    }

    static async createCardType(body) {
        return await cardtype.createCardType(body);
    }

    static async updateCardType(id, body) {
        return await cardtype.updateCardType(id, body);
    }

    static async deleteCardType(id){
        return await cardtype.deleteCardType(id)
    }
    
}

export default CardType;