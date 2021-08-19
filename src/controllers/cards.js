import Card from '../models/Factory/CardFactory'
import {validationResult} from 'express-validator'

export const getCards = async(req, res, next) => {
    try{
        const cards = await Card.getCards();
        return res.status(200).json(cards);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getCard = async(req, res, next) => {
    try{
        const card = await Card.getCard(req.params.id);
        return res.status(200).json(card);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createCard = async(req, res, next) => {
    try{
        const card = await Card.createCard(req.body);
        return res.status(200).json(card);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateCard = async(req, res, next) => {
    try{
        const card = await Card.updateCard(req.params.id, req.body);
        return res.status(200).json(card);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteCard = async(req, res, next) => {
    try{
        const card = await Card.deleteCard(req.params.id);
        return res.status(200).json(card);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
