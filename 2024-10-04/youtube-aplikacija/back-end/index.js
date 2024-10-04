import { populateCategories } from './helpers/populateCategories.js';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import video from './controllers/video.js';
import user from './controllers/user.js';
import category from './controllers/category.js';

const config = dotenv.config().parsed;

// Bandome prisijungti prie duomenų bazės
try {

    // Prisijungimas prie duomenų bazės
    await mongoose.connect(config.MONGO_URL);

    console.log('Connected!')

    // Kategorijų sukūrimas

    populateCategories();

    // Express aplikacijos iniciavimas
    const app = express();

    // Failų įkėlimo (multer) inciavimas
    const upload = multer({ dest: './uploads'});

    // x-www-formurlencoded duomenu priėmimo registravimas
    app.use(express.urlencoded({ extended: true }));

    // CORS užklausos praleidimas
    app.use(cors({
        origin: config.DEV_CLIENT_URL
    }));    

    // Failų direktorijos priėjimo priskyrimas
    app.use('/photos', express.static('./uploads'));

    // Controllerio priskyrimas prie express'o
    app.use('/api/video', video);
    app.use('/api/user', user);
    app.use('/api/category', category);

    // Serverio paleidimas
    app.listen(config.DEV_PORT);

} catch {
    // Nusprendžiame ką darome nepavykus prisijungti prie duomenų bazės
    console.log('Prisijungimas nepavyko');
}
  





