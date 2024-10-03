import Router from 'express';
import User from '../models/user.js';
import { upload } from '../middleware/upload.js';
import bcrypt from 'bcrypt';

const router = Router();

// Kanalo informacija
router.get('/:id', async (req, res) => {
    try {
        res.json(
            await User.findById(req.params.id)
        );
    } catch {
        res.status(500).json('Unable to reach server');
    }
});

// Vartotojo prisijungimas
router.post('/login', (req, res) => {
    res.send('Vartotojo autentifikavimas');
});

// Vartotojo registracija
router.post('/register', 
    upload.fields([ { name: 'coverPhoto', maxCount: 1 }, { name: 'userThumbnail', maxCount: 1 } ]), 
    async (req, res) => {
        try {
            // req.file.path.replace('\\', '/')
            // Nuotraukų failų priskyrimas
            req.body.coverPhoto = req.files.coverPhoto[0].filename;
            req.body.userThumbnail = req.files.userThumbnail[0].filename;
            
            //Slaptažodžio šifravimas
            req.body.password = await bcrypt.hash(req.body.password, 10);

            res.json({ 
                data: await User.create(req.body),
                message: 'User is succesfully created'
            });
        } catch(e) {
            let message = 'Unable to reach server';
            
            if(e.code === 11000) {
                message = 'Email address is already registered';
            } else if(!req.files.coverPhoto) {
                message = 'Cover photo must be uploaded';
            } else if(!req.files.userThumbnail) { 
                message = 'User thumbnail must be uploaded';
            }
            
            res.status(500).json(message);
        }
    }
);

// Vartotojo duomenu redagavimas
router.put('/', (req, res) => {
    res.send('Vartotojo info redagavimas');
});

// Vartotojo istrynimas
router.delete('/', (req, res) => {
    res.send('Vartotojo ištrynimas');
});

export default router;