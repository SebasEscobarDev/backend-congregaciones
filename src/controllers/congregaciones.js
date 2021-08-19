import Congregacion from '../models/Factory/CongregacionFactory'
import {validationResult} from 'express-validator'

export const getCongregaciones = async(req, res, next) => {
    try{
        const congregaciones = await Congregacion.getCongregaciones();
        return res.status(200).json(congregaciones);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getCongregacion = async(req, res, next) => {
    try{
        const user = await Congregacion.getCongregacion(req.params.id);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createCongregacion = async(req, res, next) => {
    try{
        const congregacion = await Congregacion.createCongregacion(req.body);
        return res.status(200).json(congregacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateCongregacion = async(req, res, next) => {
    try{
        const congregacion = await Congregacion.updateCongregacion(req.params.id, req.body);
        return res.status(200).json(congregacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}


export const deleteCongregacion = async(req, res, next) => {
    try{
        const congregacion = await Congregacion.deleteCongregacion(req.params.id);
        return res.status(200).json(congregacion);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//

