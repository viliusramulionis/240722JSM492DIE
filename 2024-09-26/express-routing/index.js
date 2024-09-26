import express from 'express';

const app = express();

// Priskyrimas norint priimti duomenis x-www-form-urlencoded formatu
app.use(express.urlencoded());

app.get('/', (req, res) => {
    // Atsakymas išsiunčiamas tik vieną kartą
    // res.send('Labas Pasauli'); 

    // req.query - grąžina visus persiųstus query parametrus
    if(req.query.category === 'mens') {
        res.json({ title: 'Vyriški rūbai' });
    } else {
        res.json({ title: 'Moteriški rūbai' });
    }
});

app.get('/category', (req, res) => {
    res.send('Kategorijos puslapis');
});

app.get('/category/:category_name', (req, res) => {
    //req.params - objektas kuriame nuguls parametras įvestu pavadinimu "category_name"

    res.json({ title: req.params.category_name });
});

app.post('/form-submit', (req, res) => {
    // req.body - grąžina persiųstus formos duomenis x-www-form-urlencoded formatu
    console.log(req.body);

    res.send('Dėkui už jūsų žinutę');
});

app.listen(3000, () => {
    // Serveris įjungtas
 
    console.log('Serveris veikia adresu http://localhost:3000');
});

// https:// - Pagal nutylėjimą priskirtas portas 443
// http:// - Pagal nutylėjimą priskirtas portas 80

// Developer mode - Kol aplikacija yra gamybos fazėje
// Production mode - Gamybiniai darbai baigti ir aplikacija pradedama naudotis

// CRUD ?
// CREATE - POST
// READ - GET
// UPDATE - PATCH, PUT
// DELETE - DELETE