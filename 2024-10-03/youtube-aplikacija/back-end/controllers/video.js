import { Router } from 'express';
import Video from '../models/video.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(
            await Video.find()
            .populate({ path: 'user', select: ['userThumbnail', 'name'] })
        );
    } catch {
        res.status(500).json('Unable to reach server');
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(
            await Video
            .findById(req.params.id)
            .populate({ path: 'user', select: ['userThumbnail', 'name'] })
        );
    } catch {
        res.status(500).json('Unable to reach server');
    }
});

// Naujo video pridėjimas
router.post('/', upload.single('thumbnail'), async (req, res) => {
    try {
        // req.file.path.replace('\\', '/')
        req.body.thumbnail = req.file.filename;

        res.json({ 
            data: await Video.create(req.body),
            message: 'Video is succesfully uploaded'
        });
    } catch {
        res.status(500).json('Unable to reach server');
    }
});

router.put('/', (req, res) => {
    res.send('Naujo video redagavimas');
});

router.delete('/', (req, res) => {
    res.send('Naujo video ištrynimas');
});

export default router;

