"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 10;
var y = 'Labas';
// Norint sukurti const kintamajį privaloma priskirti reikšmę
// const z : any; //Neveikia
// Kintamojo deklaravimas, nurodant tik duomens tipą any be jokios reikšmės
// let z : any; 
// any nurodo bet kokį duomens tipą (nerekomenduotina jo naudoti, arba naudoti kuo mažiau)
// Implicit value assignment
// let isPositive = false;
// Excplicit value assignment
var isPositive = false;
// Union type
// Nurodomi galimi reiškmių variantai
var skaicius;
// Kitokios reikšmės priskyrimas yra negalimas
// skaicius = 11;
// Intersect operatorius 
var tekstas;
// Kintamojo tekstas grąžinamas tipas: never (niekada neturėsime tinkamos reikšmės)
// void = nurodymas, jog funkcija nieko negrąžina
var tekstoSpaudinimas = function (tekstas) {
    console.log(tekstas);
};
tekstoSpaudinimas('Labas Pasauli');
// SKAIČIŲ MASYVO DEKLARAVIMAS
var masyvas = [10, 20, 30];
var pirmaReiksme = function (masyvas) {
    return masyvas[0];
};
pirmaReiksme(masyvas);
// STRINGO MASYVO DEKLARAVIMAS
var stringuMasyvas = ['Labas', 'Sveiki', 'Visi'];
// Iššaukiama klaida, kadangi bandoma talpinti kitokio duomens tipo reikšmę:
// stringuMasyvas[stringuMasyvas.length] = false; 
// Tuple duomens tipas
// Tuple = masyvo reikšmių apibrėžimas
var misrusMasyvas = ['Tautvydas', 28, false];
// Enum reikšmių priskyrimas
var Sort;
(function (Sort) {
    Sort["POPULIARIAUSIOS"] = "pp";
    Sort["GERIAUSIAI_IVERTINTOS"] = "gi";
    Sort["PAGAL_KAINA"] = "pk";
})(Sort || (Sort = {}));
var video = {
    id: 1,
    title: 'Rinkimų aptarimas',
    description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
    totalComments: 500,
    topAuthor: 'Andrius Tapimas'
};
video.category = 15;
// GENERICS APRAŠYMAS
var formatData = function (data) {
    if (typeof data === 'number') {
        return "<h1>".concat(data, "</h1>");
    }
    else if (typeof data === 'string') {
        return "<h2>".concat(data, "</h2>");
    }
};
console.log(formatData(15));
// MASYVO DEKLARAVIMAS SU PASIRINKTU OBJEKTO TIPU
var videoData = [
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
var getData = function (response) {
    if (response.status === 'success')
        return "\n            <img src=\"".concat(response.message, "\" />\n        ");
    return 'Failed to fetch';
};
fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (resp) { return resp.json(); })
    .then(function (resp) {
    document.write(getData(resp));
});
