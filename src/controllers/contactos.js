import Contacto from '../models/Factory/ContactoFactory'
import {validationResult} from 'express-validator'

export const getContactos = async(req, res, next) => {
    try{
        const contactos = await Contacto.getContactos();
        return res.status(200).json(contactos);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getContacto = async(req, res, next) => {
    try{
        const contacto = await Contacto.getContacto(req.params.id);
        return res.status(200).json(contacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createContacto = async(req, res, next) => {
    try{
        const contacto = await Contacto.createContacto(req.body);
        return res.status(200).json(contacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateContacto = async(req, res, next) => {
    try{
        const contacto = await Contacto.updateContacto(req.params.id, req.body);
        return res.status(200).json(contacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteContacto = async(req, res, next) => {
    try{
        const contacto = await Contacto.deleteContacto(req.params.id);
        return res.status(200).json(contacto);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
