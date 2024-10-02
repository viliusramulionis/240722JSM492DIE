import express from 'express';
import cors from 'cors';
import { upload } from './middleware/upload.js';

const app = express();

// Vieno failo ikelimas is laukelio kurio pavadinimas: viena_nuotrauka
app.post('/single-file', upload.single('viena_nuotrauka'), (req, res) => {
    res.send('Sekmingai ikeleme jusu nuotrauka');
});

//Keliu failu ikelimas is laukeliu kurie turi ta pati apvaidinima: daug_nuotrauku
app.post('/multiple-files', upload.array('daug_nuotrauku', 3), (req, res) => {
    res.send('Sekmingai ikeleme jusu nuotraukas');
});

app.post('/multiple-fields', upload.fields([{ name: 'pirma_nuotrauka' }, { name: 'antra_nuotrauka' }]), (req, res) => {
    res.send('Sekmingai ikeleme jusu nuotraukas');
});

app.post('/user/register', upload.fields([{ name: 'pirma_nuotrauka' }, { name: 'antra_nuotrauka' }]), (req, res) => {
    // Passimam nuotraukos adresa is req.files
    // Issaugom i duombenu baze nuotraukos adresa - 3314a9118c26ab0a8f0939a540dd5b4d.png
    res.send('Sekmingai ikeleme jusu nuotraukas');
});

app.use(cors);

app.listen(3001);