import { Router } from 'express'
import { body } from 'express-validator'
import {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} from '../controllers/contacts'
const router = Router()

router.get('/', getContacts);

router.post('/', [ 
    body('from',"Indica Desde dónde Ingresa El Contacto.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número Válido.").notEmpty().escape().trim().isInt(),
    body('country',"Debe Ingresar Un valor para el País.").notEmpty().escape().trim().isInt(),
    body('master_id',"Debe Ingresar El Maestro Asignado.").notEmpty().escape().trim().isInt(),
    body('contactstatus_id',"Debe Ingresar El Estado Del Contacto.").notEmpty().escape().trim().isInt(),
], createContact)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getContact)

router.patch('/:id', [ 
    body('from',"Indica Desde dónde Ingresa El Contacto.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número Válido.").notEmpty().escape().trim().isInt(),
    body('country',"Debe Ingresar Un valor para el País.").notEmpty().escape().trim().isInt(),
    body('master_id',"Debe Ingresar El Maestro Asignado.").notEmpty().escape().trim().isInt(),
    body('contactstatus_id',"Debe Ingresar El Estado Del Contacto.").notEmpty().escape().trim().isInt(),
], updateContact)

router.delete('/:id', deleteContact)

export default router
