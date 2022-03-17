import Currency from '../models/Factory/CurrencyFactory'
import {validationResult} from 'express-validator'

export const getCurrencies = async(req, res, next) => {
    try{
        const currencies = await Currency.getCurrencies();
        return res.status(200).json(currencies);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getCurrency = async(req, res, next) => {
    try{
        const currency = await Currency.getCurrency(req.params.id);
        return res.status(200).json(currency);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createCurrency = async(req, res, next) => {
    try{
        const currency = await Currency.createCurrency(req.body);
        return res.status(200).json(currency);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateCurrency = async(req, res, next) => {
    try{
        const currency = await Currency.updateCurrency(req.params.id, req.body);
        return res.status(200).json(currency);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteCurrency = async(req, res, next) => {
    try{
        const currency = await Currency.deleteCurrency(req.params.id);
        return res.status(200).json(currency);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
