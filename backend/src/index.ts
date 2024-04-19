import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';
import { CORE_URL_USER } from './config/url';

dotenv.config();

const app = express();
//Mañana
//Terminar QA
//Inicio de sesion(Guardar tokens en session storage o local storage)
//Enviar el token eun header de respuesta haciendo un get a nuestro endpoint
//Almacenar en redux el state del user (logged o no)
//y los datos del user en base a el token
//En caso de no existir token proteger la vista del carrito para que no puedan comprar
//el buscador siempre debe estar operativo
//1/05 empezar con el buscador)
//Fecha limite para terminar este proyecto 20/05
app.use(express.json());
app.use(cors());
app.use('/products',productsRoutes)
app.use(`${CORE_URL_USER}`,userRoutes);
app.listen(3000, () => console.log('Server is running on port 3000'));