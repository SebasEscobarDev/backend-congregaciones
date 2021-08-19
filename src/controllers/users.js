import User from '../models/Factory/UserFactory'
import {validationResult} from 'express-validator'

export const getUsers = async(req, res, next) => {
    try{
        const users = await User.getUsers();
        return res.status(200).json(users);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getUser = async(req, res, next) => {
    try{
        const user = await User.getUser(req.params.id);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createUser = async(req, res, next) => {
    try{
        const user = await User.createUser(req.body);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateUser = async(req, res, next) => {
    try{
        const user = await User.updateUser(req.params.id, req.body);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteUser = async(req, res, next) => {
    try{
        const user = await User.deleteUser(req.params.id);
        return res.status(200).json(user);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
