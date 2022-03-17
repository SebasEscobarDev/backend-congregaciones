import CardType from '../models/Factory/CardTypeFactory'
import {validationResult} from 'express-validator'

export const getCardsTypes = async(req, res, next) => {
    try{
        const cardstypes = await CardType.getCardsTypes();
        return res.status(200).json(cardstypes);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getCardType = async(req, res, next) => {
    try{
        const cardtype = await CardType.getCardType(req.params.id);
        return res.status(200).json(cardtype);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createCardType = async(req, res, next) => {
    try{
        const cardtype = await CardType.createCardType(req.body);
        return res.status(200).json(cardtype);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateCardType = async(req, res, next) => {
    try{
        const cardtype = await CardType.updateCardType(req.params.id, req.body);
        return res.status(200).json(cardtype);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteCardType = async(req, res, next) => {
    try{
        const cardtype = await CardType.deleteCardType(req.params.id);
        return res.status(200).json(cardtype);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
