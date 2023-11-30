import { check, param } from 'express-validator'
import productoMiddleware from '../middlewares/productos.middleware.js'

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado producto'),
    productoMiddleware
]
const productoReadValidator = [
    check('id')
        .isMongoId().optional() //Hace opcional el ID para poder hacer GET a uno o todos los productos.
        .withMessage('El id administrado no es correcto (debe ser un MongoId'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es requerido'),
    check('precio')
        .notEmpty()
        .withMessage('El precio es requerido').bail()
        .isNumeric()
        .withMessage('El precio debe ser numerico')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El stock es requerido').bail()
        .isNumeric()
        .withMessage('El stock debe ser numerico')
        .trim(),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es requerida'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoria es requerida'),
    check('detalles')
        .notEmpty()
        .trim()
        .withMessage('Los detalles son requeridos'),
    check('foto')
        .notEmpty()
        .trim()
        .withMessage('La foto es requerida'),
    productoMiddleware
]
const productoUpdateValidator = [
    param('id')
        .isMongoId()
        .trim()
        .withMessage('El id administrado no es correcto (debe ser un MongoId' ),
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es requerido'),
    check('precio')
        .notEmpty()
        .withMessage('El precio es requerido').bail()
        .isNumeric()
        .withMessage('El precio debe ser numerico')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El stock es requerido').bail()
        .isNumeric()
        .withMessage('El stock debe ser numerico')
        .trim(),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es requerida'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoria es requerida'),
    check('detalles')
        .notEmpty()
        .trim()
        .withMessage('Los detalles son requeridos'),
    check('foto')
        .notEmpty()
        .trim()
        .withMessage('La foto es requerida'),
    productoMiddleware
]

// productoUpdateValidator
// productoReadOneValidor

export default {
    productoReadValidator,
    productoUpdateValidator,
    productoDeleteValidator,
    productoCreateValidator
}