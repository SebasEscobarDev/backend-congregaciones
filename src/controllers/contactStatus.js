import ContactStatus from '../models/Factory/ContactStatusFactory'
import {validationResult} from 'express-validator'

export const getContactStatus = async(req, res, next) => {
    try{
        const contactStatus = await ContactStatus.getContactStatus();
        return res.status(200).json(contactStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getContactStatusOne = async(req, res, next) => {
    try{
        const contactStatus = await ContactStatus.getContactStatusOne(req.params.id);
        return res.status(200).json(contactStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createContactStatus = async(req, res, next) => {
    try{
        const contactStatus = await ContactStatus.createContactStatus(req.body);
        return res.status(200).json(contactStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateContactStatus = async(req, res, next) => {
    try{
        const contactStatus = await ContactStatus.updateContactStatus(req.params.id, req.body);
        return res.status(200).json(contactStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteContactStatus = async(req, res, next) => {
    try{
        const contactStatus = await ContactStatus.deleteContactStatus(req.params.id);
        return res.status(200).json(contactStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//

