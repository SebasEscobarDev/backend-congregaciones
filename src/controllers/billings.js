import Billing from '../models/Factory/BillingFactory'
import {validationResult} from 'express-validator'

export const getBillings = async(req, res, next) => {
    try{
        const billings = await Billing.getBillings();
        return res.status(200).json(billings);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getBilling = async(req, res, next) => {
    try{
        const billing = await Billing.getBilling(req.params.id);
        return res.status(200).json(billing);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createBilling = async(req, res, next) => {
    try{
        const billing = await Billing.createBilling(req.body);
        return res.status(200).json(billing);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateBilling = async(req, res, next) => {
    try{
        const billing = await Billing.updateBilling(req.params.id, req.body);
        return res.status(200).json(billing);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteBilling = async(req, res, next) => {
    try{
        const billing = await Billing.deleteBilling(req.params.id);
        return res.status(200).json(billing);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}
