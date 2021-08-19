import { Router } from 'express'
import { body } from 'express-validator'
import {
    getContactos,
    createContacto,
    getContacto,
    updateContacto,
    deleteContacto
} from '../controllers/contactos'
const router = Router()

router.get('/', getContactos);

router.post('/', [ 
    body('from',"Indica Desde dónde Ingresa El Contacto.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número Válido.").notEmpty().escape().trim().isInt(),
    body('country',"Debe Ingresar Un valor para el País.").notEmpty().escape().trim().isInt(),
    body('estadocontacto_id',"Debe Ingresar El Estado Del Contacto.").notEmpty().escape().trim().isInt(),
    body('user_id',"Debe Ingresar El Maestro Asignado.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], createContacto)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getContacto)

router.put('/:id', [ 
    body('from',"Indica Desde dónde Ingresa El Contacto.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número Válido.").notEmpty().escape().trim().isInt(),
    body('country',"Debe Ingresar Un valor para el País.").notEmpty().escape().trim().isInt(),
    body('estadocontacto_id',"Debe Ingresar El Estado Del Contacto.").notEmpty().escape().trim().isInt(),
    body('user_id',"Debe Ingresar El Maestro Asignado.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], updateContacto)

router.delete('/:id', deleteContacto)

export default router
