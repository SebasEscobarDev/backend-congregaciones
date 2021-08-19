import { Router } from 'express'
import { body } from 'express-validator'
import {
    getFacturaciones,
    createFacturacion,
    getFacturacion,
    updateFacturacion,
    deleteFacturacion
} from '../controllers/facturaciones'

//UPDATE THIS CARDS!!!

const router = Router()

router.get('/', getFacturaciones);

router.post('/', [
    body('contacto_id',"Debe Ingresar Un Contacto.").notEmpty().escape().trim().isInt(),
    body('user_id',"Debe Ingresar Un Usuario.").notEmpty().escape().trim().isInt(),
    body('card_id',"Debe Ingresar Una Tarjeta.").notEmpty().escape().trim().isInt(),
    body('moneda_id',"Debe Ingresar Una Moneda.").notEmpty().escape().trim().isInt(),
    body('valor',"Debe Ingresar Un Valor En Números Enteros.").notEmpty().escape().trim().isInt(),
    body('estado_id',"Debe Ingresar El Estado De La Facturación.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], createFacturacion)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getFacturacion)

router.put('/:id', [ 
    body('contacto_id',"Debe Ingresar Un Contacto.").notEmpty().escape().trim().isInt(),
    body('user_id',"Debe Ingresar Un Usuario.").notEmpty().escape().trim().isInt(),
    body('card_id',"Debe Ingresar Una Tarjeta.").notEmpty().escape().trim().isInt(),
    body('moneda_id',"Debe Ingresar Una Moneda.").notEmpty().escape().trim().isInt(),
    body('valor',"Debe Ingresar Un Valor En Números Enteros.").notEmpty().escape().trim().isInt(),
    body('estado_id',"Debe Ingresar El Estado De La Facturación.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], updateFacturacion)

router.delete('/:id', deleteFacturacion)

export default router
