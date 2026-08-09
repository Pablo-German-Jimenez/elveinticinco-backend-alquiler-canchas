import { Router } from 'express';
import { crearOrdenCarrito, recibirWebHook} from '../controllers/pagos.controllers.js';

const router = Router();

router.route('/crear-orden-carrito').post(crearOrdenCarrito);
router.route('/webhook').post(recibirWebHook)

export default router;
