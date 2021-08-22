import Rol from '../models/Factory/RolFactory'
import {validationResult} from 'express-validator'

export const getRoles = async(req, res, next) => {
    try{
        const roles = await Rol.getRoles();
        return res.status(200).json(roles);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getRol = async(req, res, next) => {
    try{
        const rol = await Rol.getRol(req.params.id);
        return res.status(200).json(rol);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createRol = async(req, res, next) => {
    try{
        const rol = await Rol.createRol(req.body);
        return res.status(200).json(rol);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateRol = async(req, res, next) => {
    try{
        const rol = await Rol.updateRol(req.params.id, req.body);
        return res.status(200).json(rol);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteRol = async(req, res, next) => {
    try{
        const user = await Rol.deleteRol(req.params.id);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
