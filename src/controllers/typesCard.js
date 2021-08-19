import TypeCard from '../models/Factory/TypeCardFactory'
import {validationResult} from 'express-validator'

export const getTypesCard = async(req, res, next) => {
    try{
        const typescard = await TypeCard.getTypesCard();
        return res.status(200).json(typescard);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getTypeCard = async(req, res, next) => {
    try{
        const typecard = await TypeCard.getTypeCard(req.params.id);
        return res.status(200).json(typecard);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createTypeCard = async(req, res, next) => {
    try{
        const typecard = await TypeCard.createTypeCard(req.body);
        return res.status(200).json(typecard);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateTypeCard = async(req, res, next) => {
    try{
        const typecard = await TypeCard.updateTypeCard(req.params.id, req.body);
        return res.status(200).json(typecard);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteTypeCard = async(req, res, next) => {
    try{
        const typecard = await TypeCard.deleteTypeCard(req.params.id);
        return res.status(200).json(typecard);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
