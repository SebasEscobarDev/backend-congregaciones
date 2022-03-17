import { Router } from 'express'
import { body } from 'express-validator'
import {
    getContactStatus,
    createContactStatus,
    getContactStatusOne,
    updateContactStatus,
    deleteContactStatus
} from '../controllers/contactStatus'
import { auth } from './auth'
const router = Router()

router.get('/', getContactStatus);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], createContactStatus)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getContactStatusOne)

router.patch('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], updateContactStatus)

router.delete('/:id', deleteContactStatus)

export default router
