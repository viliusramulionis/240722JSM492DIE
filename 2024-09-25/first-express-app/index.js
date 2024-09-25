import express from 'express';

// VISOS EXPRESS APLIKACIJOS INICIAVIMAS:
const app = express();

// Norint priimti duoemnis x-www-form-urlencoded formatu, reikia nurodyti šią eilutę
app.use(express.urlencoded());

// ROUTE'O SUKŪRIMAS:
// BAZĖ: localhost:3000

// INFORMACIJAI GAUTI (GET METODAS):
// GET METODAS NETURI BODY DUOMENŲ
app.get('/', (req, res) => {
    // Funkcija priima du parametrus:
    // req - užklausos informacija
    // res - atsakymo informacija

    // console.log('Užklausa gauta');
    
    // Atsakymo grąžinimas 
    
    // Route'as turi tik vieną grąžinamą atsakymą
    // Bandant grąžinti atsakymą kelis kartus gaunama klaida: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

    // HTML arba tekstiniu formatu (naudojamas send() metodas)
    //res.send('<h1>Labas Pasauli</h1>');

    // JSON formatu (duomenu konvertavimas jau aktyvuotas):
    res.json({ Labas: 'Pasauli' });
});

// IFORMACIJAI PATALPINTI POST METODAS
app.post('/', (req, res) => {
    // Norint priimti duomenis iš body:
    console.log(req.body);

    //Informacijos priėmimas ir patalpinimas

    res.json('Informacija sėkmingai išsaugota');
});

// INFORMACIJOS ATNAUJINIMAS
app.put('/', (req, res) => {
    res.json('Informacija sėkmingai atnaujinta');
});

// INFORMACIJOS IŠTRYNIMAS
app.delete('/', (req, res) => {
    res.json('Informacija sėkmingai ištrinta');
});


// SERVERIO ĮJUNGIMAS:
// Serveris veikia adresu localhost:3000
app.listen(3000, () => {
    console.log('Serveris veikia')
});

// https://www.npmjs.com:5173/package/express?s=paieska
// URL(Uniform Resource Locator) struktūra
// https:// - protokolas (protocol)
// www - subdomenas (subdomain)
// npmjs.com - domenas (domain)
// :5173 - portas (port)
// /packapage/express - parametrai (params) 
// ?s=paieska = query params

// 127.0.0.1 - lokalus ip adresas
// localhost - lokalus domenas

// https:// - pagal nutylėjimą https protookas kreipiasi į 443 portą
// http:// - taip pat pagal nutylėjimą kreipiasi į 80


// HTTP UŽKLAUSŲ METODAI (HTTP REQUEST METHODS)
// GET - SKIRTAS PAIMTI INFORMACIJĄ
// POST - SKIRTAS PATALPINTI INFORMACIJĄ
// PUT - SKIRTAS ATNAUJINTI VISĄ ĮRAŠĄ
// PACH - SKIRTAS ATNAUJINTI DALĮ ĮRAŠO
// DELETE - SKIRTAS IŠTRINTI ĮRAŠĄ

// PAGAL REST (RESTFUL) ACHITEKTŪRĄ KURDAMI CRUD'o APLIKACIJĄ SUSIEJAME VEIKSMUS SU ŠIAIS HTTP METODAIS:
// CRUD: 

// CREATE - POST
// READ - GET
// UPDATE - PUT, PATCH
// DELETE - DELETE





