import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    if(Math.round(Math.random()) === 1 ) {
        res.json('Įvyko klaida');
    } else {
        res.json([
            {
                id: 1,
                name: 'Pilot'
            },
            {
                id: 2,
                name: 'Montgomery'
            }
        ]);
    }
});

app.get('/users/:id', (req, res) => {
    res.json({
        id: 1,
        name: 'Pilot'
    });
});

app.post('/users/login', (req, res) => {
    console.log(req.body);
    if(!req.body) 
        return res.sendStatus(500);
    
    if(req.body.email !== 'info@test.com')
        return res.status(401).json('Neteisingas el. pasto adresas');
    
    if(req.body.password !== '123456') 
        return res.status(401).json('Neteisingas slaptažodis');

    res.json('Prisijungimas sėkmingas');
});

app.listen(3001);

export default app;