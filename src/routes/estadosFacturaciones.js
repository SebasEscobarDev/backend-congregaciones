import { Router } from 'express'
import { body } from 'express-validator'
import {
    getEstadosFacturacion,
    createEstadoFacturacion,
    getEstadoFacturacion,
    updateEstadoFacturacion,
    deleteEstadoFacturacion
} from '../controllers/estadosFacturacion'
import { auth } from './auth'
const router = Router()

router.get('/', getEstadosFacturacion);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], createEstadoFacturacion)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getEstadoFacturacion)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
], updateEstadoFacturacion)

router.delete('/:id', deleteEstadoFacturacion)

export default router
