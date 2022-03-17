import { Router } from 'express'
import { body } from 'express-validator'
import {
    getCardsTypes,
    createCardType,
    getCardType,
    updateCardType,
    deleteCardType
} from '../controllers/cardsTypes'

const router = Router()

router.get('/', getCardsTypes);

router.post('/', [
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('fields',"Debe Ingresar los campos del tipo de tarjeta")
        .notEmpty()
        .isJSON()
], createCardType)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getCardType)

router.patch('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('fields',"Debe Ingresar los campos del tipo de tarjeta").notEmpty().isJSON()
], updateCardType)

router.delete('/:id', deleteCardType)

export default router
