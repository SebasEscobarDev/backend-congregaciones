import Facturacion from '../models/Factory/FacturacionFactory'
import {validationResult} from 'express-validator'

export const getFacturaciones = async(req, res, next) => {
    try{
        const facturaciones = await Facturacion.getFacturaciones();
        return res.status(200).json(facturaciones);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getFacturacion = async(req, res, next) => {
    try{
        const facturacion = await Facturacion.getFacturacion(req.params.id);
        return res.status(200).json(facturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createFacturacion = async(req, res, next) => {
    try{
        const user = await Facturacion.createFacturacion(req.body);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateFacturacion = async(req, res, next) => {
    try{
        const facturacion = await Facturacion.updateFacturacion(req.params.id, req.body);
        return res.status(200).json(facturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteFacturacion = async(req, res, next) => {
    try{
        const facturacion = await Facturacion.deleteFacturacion(req.params.id);
        return res.status(200).json(facturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
