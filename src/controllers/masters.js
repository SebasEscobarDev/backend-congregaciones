import Master from '../models/Factory/MasterFactory'
import {body, validationResult} from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getMasters = async(req, res, next) => {
    try{
        const masters = await Master.getMasters();
        return res.status(200).json(masters);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getMaster = async(req, res, next) => {
    try{
        const master = await Master.getMaster(req.params.id);
        return res.status(200).json(master);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createMaster = async(req, res, next) => {
    try{
        const master = await Master.createMaster(req.body);
        return res.status(200).json(master);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateMaster = async(req, res, next) => {
    try{
        const master = await Master.updateMaster(req.params.id, req.body);
        return res.status(200).json(master);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateMasterWithPass = async(req, res, next) => {
    try{
        const master = await Master.updateMasterWithPass(req.params.id, req.body);
        return res.status(200).json(master);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteMaster = async(req, res, next) => {
    try{
        const master = await Master.deleteMaster(req.params.id);
        return res.status(200).json(master);
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
        const master = await Master.login(req.body.phone);
        if ( master.phone != req.body.phone ) {
            return res.status(422).json({
                message: "Invalid phone",
            });
        }
        const passMatch = await bcrypt.compare(req.body.password, master.password);
        if(!passMatch){
            return res.status(422).json({
                message: "Incorrect password",
            });
        }
        const theToken = jwt.sign({id:master.id},'the-super-strong-secrect',{ expiresIn: '24h' });
        return res.json({
            master: master,
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
export const getMasterLogin = async (req,res,next) => {
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
    const master = await Master.getMaster(decoded.id);
    if(master.id > 0){
        return res.json({
            master
        });
    }
    res.json({
        message:"No Master Found"
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