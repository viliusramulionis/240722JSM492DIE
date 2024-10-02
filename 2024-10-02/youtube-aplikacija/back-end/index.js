import mongoose from 'mongoose';
import express from 'express';
import video from './controllers/video.js';
import user from './controllers/user.js';
import cors from 'cors';
import multer from 'multer';

// Bandome prisijungti prie duomenų bazės
try {

    // Prisijungimas prie duomenų bazės
    await mongoose.connect('mongodb://127.0.0.1:27017/youtube');
    console.log('Connected!')

    // Express aplikacijos iniciavimas
    const app = express();

    // Failų įkėlimo (multer) inciavimas
    const upload = multer({ dest: './uploads'});

    // x-www-formurlencoded duomenu priėmimo registravimas
    app.use(express.urlencoded({ extended: true }));

    // CORS užklausos praleidimas
    app.use(cors({
        origin: 'http://localhost:5173'
    }));    

    // Failų direktorijos priėjimo priskyrimas
    app.use('/photos', express.static('./uploads'));

    // Controllerio priskyrimas prie express'o
    app.use('/api/video', video);
    app.use('/api/user', user);

    // Serverio paleidimas
    app.listen(3000);

} catch {
    // Nusprendžiame ką darome nepavykus prisijungti prie duomenų bazės
    console.log('Prisijungimas nepavyko');
}
  





