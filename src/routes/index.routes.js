import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import usuariosRoutes from "./usuario.routes.js"; 
import reservasRoutes from "./reservas.route.js"; 
import pagosRouter from './pagos.routes.js';


const router = Router();


router.use('/productos', productosRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/reservas', reservasRoutes);
router.use('/pagos', pagosRouter);

export default router;