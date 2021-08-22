import { Router } from 'express'
import { body } from 'express-validator'
import {
    getCards,
    createCard,
    getCard,
    updateCard,
    deleteCard
} from '../controllers/cards'

//UPDATE THIS CARDS!!!

const router = Router()

router.get('/', getCards);

router.post('/', [
    body('active',"Debe Ingresar El campo active.").notEmpty().escape().trim().isInt(),
    body('values',"Debe Ingresar Los Valores Del Tipo De Tarjeta.").notEmpty().isJSON(),
    body('typecard_id',"Debe Ingresar El tipo de Tarjeta.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt()
], createCard)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getCard)

router.put('/:id', [ 
    body('active',"Debe Ingresar El campo active.").notEmpty().escape().trim().isInt(),
    body('values',"Debe Ingresar Los Valores Del Tipo De Tarjeta.").notEmpty().isJSON(),
    body('typecard_id',"Debe Ingresar El tipo de Tarjeta.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt()
], updateCard)

router.delete('/:id', deleteCard)

export default router
