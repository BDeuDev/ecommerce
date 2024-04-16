import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/products',productsRoutes)
app.use(`/`,userRoutes);
app.listen(3000, () => console.log('Server is running on port 3000'));