import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;

// esta parte esta llamando la configuracion de la base de datos para establecer la conexion
const connectionString = process.env.DATABASE_URL;

export const db = new Pool({
    allowExitOnIdle: true,
    connectionString,
});



//Probar conexion
try {
    await db.query('SELECT NOW()');
    console.log("Conexion Exitosa! en la base de datos");
} catch (error) {
    console.log(error);
}