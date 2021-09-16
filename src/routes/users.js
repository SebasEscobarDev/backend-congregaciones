import { Router } from 'express'
import { body } from 'express-validator'
import {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    login,
    getUserLogin
} from '../controllers/users'
import { auth } from './auth'
const router = Router()

router.get('/', getUsers);

router.post('/', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('email',"Dirección de email incorrecta")
        .notEmpty()
        .escape()
        .trim().isEmail(),
    body('password',"La contraseña debe tener un mínimo de 4 carácteres.")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
    body('rol_id',"Debe Ingresar Un Rol De Usuario.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], createUser)

router.get('/:id', [
    body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getUser)

router.put('/:id', [ 
    body('name',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
    body('email',"Dirección de email incorrecta")
        .notEmpty()
        .escape()
        .trim().isEmail(),
    body('active',"Debe indicar si el usuario estará activo.").notEmpty().escape().trim().isInt(),
    body('rol_id',"Debe Ingresar Un Rol De Usuario.").notEmpty().escape().trim().isInt(),
    body('congregacion_id',"Debe Ingresar Una Congregación Registrada.").notEmpty().escape().trim().isInt(),
], updateUser)

router.delete('/:id', deleteUser)


//LOGIN
router.post('/login',[
    body('email',"Invalid email address")
        .notEmpty()
        .trim()
        .isEmail(),
    body('password',"The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
], login);

//GET USER LOGIN WITH TOKEN
router.get('/get/login', getUserLogin);

export default router
