import EstadoContacto from '../models/Factory/EstadoContactoFactory'
import {validationResult} from 'express-validator'

export const getEstadosContacto = async(req, res, next) => {
    try{
        const estadosContacto = await EstadoContacto.getEstadosContacto();
        return res.status(200).json(estadosContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getEstadoContacto = async(req, res, next) => {
    try{
        const estadoContacto = await EstadoContacto.getEstadoContacto(req.params.id);
        return res.status(200).json(estadoContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createEstadoContacto = async(req, res, next) => {
    try{
        const estadoContacto = await EstadoContacto.createEstadoContacto(req.body);
        return res.status(200).json(estadoContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateEstadoContacto = async(req, res, next) => {
    try{
        const estadoContacto = await EstadoContacto.updateEstadoContacto(req.params.id, req.body);
        return res.status(200).json(estadoContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteEstadoContacto = async(req, res, next) => {
    try{
        const estadoContacto = await EstadoContacto.deleteEstadoContacto(req.params.id);
        return res.status(200).json(estadoContacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//

