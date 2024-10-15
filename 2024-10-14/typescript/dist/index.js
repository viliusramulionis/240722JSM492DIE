"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
let y = 'Labas';
// Norint sukurti const kintamajį privaloma priskirti reikšmę
// const z : any; //Neveikia
// Kintamojo deklaravimas, nurodant tik duomens tipą any be jokios reikšmės
// let z : any; 
// any nurodo bet kokį duomens tipą (nerekomenduotina jo naudoti, arba naudoti kuo mažiau)
// Implicit value assignment
// let isPositive = false;
// Excplicit value assignment
let isPositive = false;
// Union type
// Nurodomi galimi reiškmių variantai
let skaicius;
// Kitokios reikšmės priskyrimas yra negalimas
// skaicius = 11;
// Intersect operatorius 
let tekstas;
// Kintamojo tekstas grąžinamas tipas: never (niekada neturėsime tinkamos reikšmės)
// void = nurodymas, jog funkcija nieko negrąžina
const tekstoSpaudinimas = (tekstas) => {
    console.log(tekstas);
};
tekstoSpaudinimas('Labas Pasauli');
// SKAIČIŲ MASYVO DEKLARAVIMAS
const masyvas = [10, 20, 30];
const pirmaReiksme = (masyvas) => {
    return masyvas[0];
};
pirmaReiksme(masyvas);
// STRINGO MASYVO DEKLARAVIMAS
const stringuMasyvas = ['Labas', 'Sveiki', 'Visi'];
// Iššaukiama klaida, kadangi bandoma talpinti kitokio duomens tipo reikšmę:
// stringuMasyvas[stringuMasyvas.length] = false; 
// Tuple duomens tipas
// Tuple = masyvo reikšmių apibrėžimas
const misrusMasyvas = ['Tautvydas', 28, false];
// Enum reikšmių priskyrimas
var Sort;
(function (Sort) {
    Sort["POPULIARIAUSIOS"] = "pp";
    Sort["GERIAUSIAI_IVERTINTOS"] = "gi";
    Sort["PAGAL_KAINA"] = "pk";
})(Sort || (Sort = {}));
const video = {
    id: 1,
    title: 'Rinkimų aptarimas',
    description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
    totalComments: 500,
    topAuthor: 'Andrius Tapimas'
};
video.category = 15;
// GENERICS APRAŠYMAS
const formatData = (data) => {
    if (typeof data === 'number') {
        return `<h1>${data}</h1>`;
    }
    else if (typeof data === 'string') {
        return `<h2>${data}</h2>`;
    }
};
console.log(formatData(15));
// MASYVO DEKLARAVIMAS SU PASIRINKTU OBJEKTO TIPU
const videoData = [
    {
        id: 1,
        title: 'Rinkimų aptarimas',
        description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
        totalComments: 500,
        topAuthor: 'Andrius Tapimas'
    },
    {
        id: 2,
        title: 'Rinkimų aptarimas',
        description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
        totalComments: 500,
        topAuthor: 'Andrius Tapimas'
    },
    {
        id: 3,
        title: 'Rinkimų aptarimas',
        description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
        totalComments: 500,
        topAuthor: 'Andrius Tapimas'
    }
];
const getData = (response) => {
    if (response.status === 'success')
        return `
            <img src="${response.message}" />
        `;
    return 'Failed to fetch';
};
fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then((resp) => {
    document.write(getData(resp));
});
