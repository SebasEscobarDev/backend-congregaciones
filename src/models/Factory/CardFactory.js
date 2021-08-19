import CardModel from '../Card';
const card = new CardModel();

class Card {
    
    static async getCards() {
        return await card.getCards();
    }

    static async getCard(id){
        return await card.getCard(id);
    }

    static async createCard(body) {
        return await card.createCard(body);
    }

    static async updateCard(id, body) {
        return await card.updateCard(id, body);
    }

    static async deleteCard(id){
        return await card.deleteCard(id)
    }
    
}

export default Card;