import EstadoFacturacion from '../models/Factory/EstadoFacturacionFactory'
import {validationResult} from 'express-validator'

export const getEstadosFacturacion = async(req, res, next) => {
    try{
        const estadosContacto = await EstadoFacturacion.getEstadosFacturacion();
        return res.status(200).json(estadosContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getEstadoFacturacion = async(req, res, next) => {
    try{
        const estadoFacturacion = await EstadoFacturacion.getEstadoFacturacion(req.params.id);
        return res.status(200).json(estadoFacturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createEstadoFacturacion = async(req, res, next) => {
    try{
        const estadoFacturacion = await EstadoFacturacion.createEstadoFacturacion(req.body);
        return res.status(200).json(estadoFacturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateEstadoFacturacion = async(req, res, next) => {
    try{
        const estadoFacturacion = await EstadoFacturacion.updateEstadoFacturacion(req.params.id, req.body);
        return res.status(200).json(estadoFacturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteEstadoFacturacion = async(req, res, next) => {
    try{
        const estadoFacturacion = await EstadoFacturacion.deleteEstadoFacturacion(req.params.id);
        return res.status(200).json(estadoFacturacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//

