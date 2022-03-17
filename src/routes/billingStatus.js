import { Router } from 'express'
import { body } from 'express-validator'
import {
    getBillingStatuses,
    createBillingStatus,
    getBillingStatus,
    updateBillingStatus,
    deleteBillingStatus
} from '../controllers/billingStatus'
import { auth } from './auth'
const router = Router()

router.get('/', getBillingStatuses);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], createBillingStatus)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getBillingStatus)

router.patch('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], updateBillingStatus)

router.delete('/:id', deleteBillingStatus)

export default router
