import { Router } from 'express';
import Video from '../models/video.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(await Video.find());
    } catch {
        res.status(500).json('Nepavyko susisiekti su serveriu');
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await Video.findById(req.params.id));
    } catch {
        res.status(500).json('Nepavyko susisiekti su serveriu');
    }
}) 

// Naujo video pridėjimas
router.post('/', async (req, res) => {
    try {
        res.json(await Video.create(req.body));
    } catch {
        res.status(500).json('Nepavyko susisiekti su serveriu');
    }
});

router.put('/', (req, res) => {
    res.send('Naujo video redagavimas');
});

router.delete('/', (req, res) => {
    res.send('Naujo video ištrynimas');
});

export default router;

