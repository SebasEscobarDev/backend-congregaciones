import { Router } from 'express'
import { body } from 'express-validator'
import {
    getEstadosContacto,
    createEstadoContacto,
    getEstadoContacto,
    updateEstadoContacto,
    deleteEstadoContacto
} from '../controllers/estadosContacto'
import { auth } from './auth'
const router = Router()

router.get('/', getEstadosContacto);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], createEstadoContacto)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getEstadoContacto)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], updateEstadoContacto)

router.delete('/:id', deleteEstadoContacto)

export default router
