import { Router } from 'express'
import { body } from 'express-validator'
import {
    getCongregaciones,
    createCongregacion,
    getCongregacion,
    updateCongregacion,
    deleteCongregacion
} from '../controllers/congregaciones'
import { auth } from './auth'
const router = Router()

router.get('/', getCongregaciones);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
], createCongregacion)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getCongregacion)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
], updateCongregacion)

router.delete('/:id', deleteCongregacion)

export default router
