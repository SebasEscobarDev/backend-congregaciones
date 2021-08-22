import { Router } from 'express'
import { body } from 'express-validator'
import {
    getRoles,
    createRol,
    getRol,
    updateRol,
    deleteRol
} from '../controllers/roles'
import { auth } from './auth'
const router = Router()

router.get('/', getRoles);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('congregacion_id',"Debe Ingresar Un Nombre.").notEmpty().isInt(),
], createRol)

router.get('/:id', [
    body('id',"Debe Ingresar Un ROL ID válido.").notEmpty().escape().trim().isInt(),
], getRol)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('congregacion_id',"Debe Ingresar Un Nombre.").notEmpty().isInt(),
], updateRol)

router.delete('/:id', deleteRol)

export default router
