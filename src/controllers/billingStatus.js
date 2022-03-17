import BillingStatus from '../models/Factory/BillingStatusFactory'
import {validationResult} from 'express-validator'

export const getBillingStatuses = async(req, res, next) => {
    try{
        const billingStatuses = await BillingStatus.getBillingStatuses();
        return res.status(200).json(billingStatuses);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const getBillingStatus = async(req, res, next) => {
    try{
        const billingStatus = await BillingStatus.getBillingStatus(req.params.id);
        return res.status(200).json(billingStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const createBillingStatus = async(req, res, next) => {
    try{
        const billingStatus = await BillingStatus.createBillingStatus(req.body);
        return res.status(200).json(billingStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const updateBillingStatus = async(req, res, next) => {
    try{
        const billingStatus = await BillingStatus.updateBillingStatus(req.params.id, req.body);
        return res.status(200).json(billingStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

export const deleteBillingStatus = async(req, res, next) => {
    try{
        const billingStatus = await BillingStatus.deleteBillingStatus(req.params.id);
        return res.status(200).json(billingStatus);
    }catch( error ){
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
}

//

