import { Router } from 'express'
import { body } from 'express-validator'
import {
    getCurrencies,
    createCurrency,
    getCurrency,
    updateCurrency,
    deleteCurrency
} from '../controllers/currencies'
import { auth } from './auth'
const router = Router()

router.get('/', getCurrencies);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 2 })
], createCurrency)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()
], getCurrency)

router.patch('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 })
], updateCurrency)

router.delete('/:id', deleteCurrency)

export default router
