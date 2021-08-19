import { Router } from 'express'
import { body } from 'express-validator'
import {
    getTypesCard,
    createTypeCard,
    getTypeCard,
    updateTypeCard,
    deleteTypeCard
} from '../controllers/typesCard'

const router = Router()

router.get('/', getTypesCard);

router.post('/', [
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('fields',"Debe Ingresar los campos del tipo de tarjeta")
        .notEmpty()
        .isJSON(),
    body('congregacion_id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], createTypeCard)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getTypeCard)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('fields',"Debe Ingresar los campos del tipo de tarjeta").notEmpty().isJSON(),
    body('congregacion_id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], updateTypeCard)

router.delete('/:id', deleteTypeCard)

export default router
