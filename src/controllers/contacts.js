import Contact from '../models/Factory/ContactFactory'
import {validationResult} from 'express-validator'

export const getContacts = async(req, res, next) => {
    try{
        const contacts = await Contact.getContacts();
        return res.status(200).json(contacts);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getContact = async(req, res, next) => {
    try{
        const contact = await Contact.getContact(req.params.id);
        return res.status(200).json(contact);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createContact = async(req, res, next) => {
    try{
        const contact = await Contact.createContact(req.body);
        return res.status(200).json(contact);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateContact = async(req, res, next) => {
    try{
        const contact = await Contact.updateContact(req.params.id, req.body);
        return res.status(200).json(contact);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteContact = async(req, res, next) => {
    try{
        const contact = await Contact.deleteContact(req.params.id);
        return res.status(200).json(contact);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
