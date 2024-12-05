import express from 'express';
import path from 'path';
import { db } from './database/conexion_db.js'
import clientRouter from './routes/cliente.route.js';

const app = express();
const __dirname = path.resolve(); // Ruta base del proyecto

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Usar las rutas definidas en cliente.route.js
app.use('/', clientRouter);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
