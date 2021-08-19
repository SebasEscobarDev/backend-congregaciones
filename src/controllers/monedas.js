import Moneda from '../models/Factory/MonedaFactory'
import {validationResult} from 'express-validator'

export const getMonedas = async(req, res, next) => {
    try{
        const monedas = await Moneda.getMonedas();
        return res.status(200).json(monedas);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getMoneda = async(req, res, next) => {
    try{
        const moneda = await Moneda.getMoneda(req.params.id);
        return res.status(200).json(moneda);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createMoneda = async(req, res, next) => {
    try{
        const moneda = await Moneda.createMoneda(req.body);
        return res.status(200).json(moneda);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateMoneda = async(req, res, next) => {
    try{
        const moneda = await Moneda.updateMoneda(req.params.id, req.body);
        return res.status(200).json(moneda);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteMoneda = async(req, res, next) => {
    try{
        const moneda = await Moneda.deleteMoneda(req.params.id);
        return res.status(200).json(moneda);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
