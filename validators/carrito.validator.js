import { check } from 'express-validator'
import productoMiddleware from '../middlewares/productos.middleware.js'

const carritoGuardarValidator = [
    check('cantidad')
        .isEmpty()
        .withMessage('El carrito debe contener almenos un elemento'),
    productoMiddleware
]

export default {carritoGuardarValidator}