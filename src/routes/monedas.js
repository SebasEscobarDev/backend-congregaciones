import { Router } from 'express'
import { body } from 'express-validator'
import {
    getMonedas,
    createMoneda,
    getMoneda,
    updateMoneda,
    deleteMoneda
} from '../controllers/monedas'
import { auth } from './auth'
const router = Router()

router.get('/', getMonedas);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 2 }),
    body('cop_value',"Debe Ingresar Un valor en pesos válido.").notEmpty().isInt(),
], createMoneda)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getMoneda)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('cop_value',"Debe Ingresar Un valor en pesos válido.").notEmpty().isInt(),
], updateMoneda)

router.delete('/:id', deleteMoneda)

export default router
