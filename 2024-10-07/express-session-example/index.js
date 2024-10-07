import express from 'express';
import session from 'express-session';
import { checkAuth } from './middleware/auth.js';

const app = express();

// Sesijos konfiguracijos priskyrimas
app.use(session({
    secret: 'keyboard cat',
    resave: false, //Ar sausainelis turi buti issaugomas is naujo po pakeitimo
    saveUninitialized: false, //Ar sausainelis turi buti sukuriamas vos tik gaunama pirma uzklausa 
    cookie: { secure: false } //Nurodomo true jeigu naudojamas https protokolas (jeigu projektas veikia production aplinkoje)
}));

app.use(express.urlencoded({ extended: true }));

// Route'as kuris prieinamas visiems vartotojams
app.get('/guest', (req, res) => {
    res.send('Titulinis puslapis');
});

// Route'as kuris prieinamas tik prisijungusiems vartotojams
app.get('/client', checkAuth, (req, res) => {
    res.send('Prisijungusio vartotojo puslapis');
});

// Route'as kuris prieinamas tik prisijungusiems vartotojams
app.get('/upload', checkAuth, (req, res) => {
    res.send('Duomenų įkėlimo puslapis');
})

// Vartotojo autentintifikavimui skirtas route'as
app.get('/login', (req, res) => {
    // Norint priskirti informaciją prie esamos sesijos
    // req.session.prisijunges = 'Labas Pasauli';

    // Jeigu vartotojas sekmingai prisijunge
    //res.redirect('/client');

    // Jeigu ne:
    // res.send('Neteisingi prisijungimo duomenys');

    // PRISIJUNGIMO DUOMENŲ TIKRINIMAS:
    if(req.body.email === 'test@gmail.com' && req.body.password === '123456') {
        req.session.prisijunges = true;
        res.redirect('/client');
    } else {
        res.send('Neteisingi prisijungimo duomenys')
    }
});

app.listen(5000);