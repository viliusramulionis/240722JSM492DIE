import Router from 'express';

const router = Router();

router.get('/:id', (req, res) => {
    res.send('Kanalo informacija');
});

router.post('/login', (req, res) => {
    res.send('Vartotojo autentifikavimas');
});

router.post('/', (req, res) => {
    res.send('Vartotojo registracija');
});

router.put('/', (req, res) => {
    res.send('Vartotojo info redagavimas');
});

router.delete('/', (req, res) => {
    res.send('Vartotojo ištrynimas');
});

export default router;