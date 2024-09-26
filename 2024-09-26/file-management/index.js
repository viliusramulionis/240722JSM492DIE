import { readFile, writeFile, appendFile, rm } from 'fs/promises';
import express from 'express';

const app = express();

app.use(express.urlencoded());

app.get('/', async (req, res) => {
    // Informacijos iš duomenų bazės grąžinimas
    const data = await readFile('database.txt', 'utf8');
    const response = [];

    for(const line of data.split('\r\n')) {
        if(line === '')
            continue;

        const columns = line.split(';');
        response[response.length] = {
            name: columns[0],
            lastName: columns[1],
            address: columns[2]
        }
    }

    res.json(response);
});


app.post('/', async (req, res) => {
    // Informacijos išsaugojimas duomenų bazėje
    // let result = '';

    // for(const key in req.body) {
    //     result += req.body[key] + ';'
    // }

    // console.log(Object.values(req.body).join(';') + '\r\n');

    await appendFile('database.txt', Object.values(req.body).join(';') + '\r\n');

    res.send('Irašas sėkmingai išsaugotas');
});

app.listen(3000);







//CRUD:
// CREATE - writeFile
// READ - readFile
// UPDATE - appendFIle
// DELETE - rm

// writeFile - sukuria norimą failą
// await writeFile('database.txt', 'Labas');

// rm - ištrina norimą failą
// await rm('database.txt');

// appendFile - failo papildymas
// await appendFile('database.txt', 'Jonas;Jonaitis;Jonų g. 18, Vilnius\r\n');

// readFile() - grąžina failo turinį
// const data = await readFile('database.txt', 'utf8');

// for(const line of data.split('\r\n')) {
//     if(line === '')
//         continue;

//     const columns = line.split(';');

//     console.log(`Kliento vardas: ${columns[0]}, Kliento pavardė: ${columns[1]}, Kliento adresas: ${columns[2]}`);
// }