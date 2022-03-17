import { Router } from 'express'
import { body } from 'express-validator'
import {
    getBillings,
    createBilling,
    getBilling,
    updateBilling,
    deleteBilling
} from '../controllers/billings'

const router = Router()

router.get('/', getBillings);

router.post('/', [
    body('currency_value',"Debe Ingresar Un Valor.").notEmpty().escape().trim().isInt(),
    body('cop_value',"Debe Ingresar Un Valor En Números Enteros.").notEmpty().escape().trim().isInt(),
    body('master_id',"Debe Ingresar Un Usuario.").notEmpty().escape().trim().isInt(),
    body('currency_id',"Debe Ingresar Una Moneda.").notEmpty().escape().trim().isInt(),
    body('card_id',"Debe Ingresar Una Tarjeta.").notEmpty().escape().trim().isInt(),
    body('contact_id',"Debe Ingresar Un Contacto.").notEmpty().escape().trim().isInt(),
    body('billingStatus_id',"Debe Ingresar El Estado De La Facturación.").notEmpty().escape().trim().isInt()
], createBilling)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getBilling)

router.patch('/:id', [ 
    body('currency_value',"Debe Ingresar Un Valor.").notEmpty().escape().trim().isInt(),
    body('cop_value',"Debe Ingresar Un Valor En Números Enteros.").notEmpty().escape().trim().isInt(),
    body('master_id',"Debe Ingresar Un Usuario.").notEmpty().escape().trim().isInt(),
    body('currency_id',"Debe Ingresar Una Moneda.").notEmpty().escape().trim().isInt(),
    body('card_id',"Debe Ingresar Una Tarjeta.").notEmpty().escape().trim().isInt(),
    body('contact_id',"Debe Ingresar Un Contacto.").notEmpty().escape().trim().isInt(),
    body('billingstatus_id',"Debe Ingresar El Estado De La Facturación.").notEmpty().escape().trim().isInt()
], updateBilling)

router.delete('/:id', deleteBilling)

export default router
