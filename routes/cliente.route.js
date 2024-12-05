import { Router } from "express";
import path from "path";

const router = Router();
const __dirname = path.resolve(); // Ruta base del proyecto
const publicPath = path.join(__dirname, "public"); // Ruta a la carpeta pública

// Ruta para la página de clientes
router.get('/clientes', (req, res) => {
    res.sendFile(path.join(publicPath, 'clientes.html'));
});

export default router;
