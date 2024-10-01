import express from 'express';

const app = express();

// Visiems route'ams registruojamas midlevaras (middleware)
// app.use((req, res, next) => {
//     if(req.query.stop) 
//         return res.send('Nepraleidžiame toliau'); 

//     next();
// });

// Middleware praktinis pavyzdys visiems route'ams
app.use(express.urlencoded({ extended: true }))

// Middleware'o funkcijos deklaravimas deklaravimas
// req - užklausos (request) informacija
// res - atsakymo (response) informacija
// next - sekančio veiksmo iniciavimo funkcija

const authMiddleware = (req, res, next) => {
    if(req.body.email !== 'test@gmail.com' || req.body.password !== '123456') 
        return res.send('Wrong credentials');

    console.log('Middleware ijungtas');
    next(); // next = actionMiddleware 
}

// Veiksmas deklaruojamas route kaip išorinė funkcija
const actionMiddleware = (req, res) => {
    console.log('Action pajungtas');

    const data = [];

    for(let i = 0; i < 10000; i++) {
        if(i % 2 === 0) 
            data.push(i);
    }

    res.json(data);
}

// Middleware'o ir veiksmo priskyrimas prie nurodyto kelio
app.post('/auth', authMiddleware, actionMiddleware);

//Middleware'o ir veiksmo priskyrimas, tik šį kartą veiksmas deklaruojas neįvardinus funkcijos (anonymous function)
app.post('/admin', authMiddleware, (req, res) => {    
    const data = [];

    for(let i = 43; i <= 69; i++) {
        data.push(String.fromCharCode('0' + i));
    }

    res.json(data);
});


// Middleware deklaravimas, kurio paskirtis tikrinti ar query parametras name egzistuoja
const checkName = (req, res, next) => {
    if(req.query.name) 
        return res.send('Nothing will happen');

    next();
}

// Daugkartinis middleware'o priskyrimas:

app.get('/posts', checkName, (req, res) => {
    //Duomenų paėmimas
    res.json({ data: [] });
});

app.get('/posts1', checkName, (req, res) => {
    //Duomenų paėmimas
    res.json({ data: ['pavadinimas1'] });
});

app.get('/posts2', checkName, (req, res) => {
    //Duomenų paėmimas
    res.json({ data: ['pavadinimas2'] });
});

app.get('/posts3', checkName, (req, res) => {
    //Duomenų paėmimas
    res.json({ data: ['pavadinimas3'] });
});





app.listen(3000);