import { Router } from 'express'
import { body } from 'express-validator'
import {
    getMasters,
    createMaster,
    getMaster,
    updateMaster,
    deleteMaster,
    login,
    getMasterLogin,
    updateMasterWithPass
} from '../controllers/masters'
import { auth } from './auth'
const router = Router()

router.get('/', getMasters);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('image',"Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('password',"La contraseña debe tener un mínimo de 4 carácteres.")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
    body('rol_id',"Debe Ingresar Un Rol De Usuario.").notEmpty().escape().trim().isInt()
], createMaster)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getMaster)

router.patch('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('image',"Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
    body('rol_id',"Debe Ingresar Un Rol De Usuario.").notEmpty().escape().trim().isInt()
], updateMaster)

router.patch('/:id/pass', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('phone',"Debe Ingresar Un Número.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('image',"Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('password',"La contraseña debe tener un mínimo de 4 carácteres.")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
    body('rol_id',"Debe Ingresar Un Rol De Usuario.").notEmpty().escape().trim().isInt()
], updateMasterWithPass)

router.delete('/:id', deleteMaster)


//LOGIN
router.post('/login',[
    body('phone',"Invalid Phone Number")
        .notEmpty()
        .trim(),
    body('password',"The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
], login);

//GET USER LOGIN WITH TOKEN
router.get('/get/login', getMasterLogin);

export default router
