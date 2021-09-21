import User from '../models/Factory/UserFactory'
import {body, validationResult} from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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


//LOGIN POST
export const login = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
        const user = await User.login(req.body.email);
        if ( user.email != req.body.email  ) {
            return res.status(422).json({
                message: "Invalid email address",
            });
        }
        const passMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passMatch){
            return res.status(422).json({
                message: "Incorrect password",
            });
        }
        const theToken = jwt.sign({id:user.id},'the-super-strong-secrect',{ expiresIn: '24h' });
        return res.json({
            user: user,
            token:theToken
        });
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//GET USER LOGIN WITH TOKEN
export const getUserLogin = async (req,res,next) => {
    if(
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ){
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    const user = await User.getUser(decoded.id);
    if(user.id > 0){
        return res.json({
            user
        });
    }
    res.json({
        message:"No user found"
    });
    // try{
    //     const user = await User.getUserLogin(req,res);
    //     return res.status(200).json(user);
    // }catch( error ){
    //     return res.status(500).json({
    //         message: 'Internal server error',
    //         error
    //     });
    // }
}