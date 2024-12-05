import { Router } from "express";
import path from "path";

const router = Router();

const __dirname = path.resolve(); // Obtener el directorio base
const publicPath = path.join(__dirname, "public"); // Ruta de la carpeta pública

router.get('/clientes', (req, res) => {
    res.sendFile(path.join(publicPath, 'clientes.html')); // Ruta completa al archivo
});

export default router;
