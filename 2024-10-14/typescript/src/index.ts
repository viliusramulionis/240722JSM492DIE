import { VideoWithComments } from './types/main'; 

let x : number = 10;

let y : string = 'Labas';

// Norint sukurti const kintamajį privaloma priskirti reikšmę
// const z : any; //Neveikia

// Kintamojo deklaravimas, nurodant tik duomens tipą any be jokios reikšmės
// let z : any; 

// any nurodo bet kokį duomens tipą (nerekomenduotina jo naudoti, arba naudoti kuo mažiau)

// Implicit value assignment
// let isPositive = false;

// Excplicit value assignment
let isPositive : boolean = false;

// Union type
// Nurodomi galimi reiškmių variantai
let skaicius : 10 | 20 | 30;

// Kitokios reikšmės priskyrimas yra negalimas
// skaicius = 11;

// Intersect operatorius 
let tekstas : 'Labas' & 10;
// Kintamojo tekstas grąžinamas tipas: never (niekada neturėsime tinkamos reikšmės)
 

// void = nurodymas, jog funkcija nieko negrąžina
const tekstoSpaudinimas = (tekstas : string) : void => {
    console.log(tekstas);
}

tekstoSpaudinimas('Labas Pasauli');

// SKAIČIŲ MASYVO DEKLARAVIMAS
const masyvas : number[] = [10, 20, 30];

const pirmaReiksme = (masyvas : number[]) : number => {
    return masyvas[0];
}

pirmaReiksme(masyvas);

// STRINGO MASYVO DEKLARAVIMAS
const stringuMasyvas : string[] = ['Labas', 'Sveiki', 'Visi'];

// Iššaukiama klaida, kadangi bandoma talpinti kitokio duomens tipo reikšmę:
// stringuMasyvas[stringuMasyvas.length] = false; 

// Tuple duomens tipas
// Tuple = masyvo reikšmių apibrėžimas
const misrusMasyvas : [string, number, boolean] = ['Tautvydas', 28, false];

// Enum reikšmių priskyrimas
enum Sort {
    POPULIARIAUSIOS = 'pp',
    GERIAUSIAI_IVERTINTOS = 'gi',
    PAGAL_KAINA = 'pk'
}

// console.log(Sort.GERIAUSIAI_IVERTINTOS);

// Objekto tipo priskyrimas:
// const video : {
//     id: number,
//     title?: any
// } = {
//     id: 1
// }

// video.title = 'Rinkimų aptarimas';

// TIPO DEKLARAVIMAS:

type VideoType = {
    id: number,
    title: string, 
    category?: number, //? reiškia, jog reikšmė nėra privaloma (optional)
    description: string | null // Esant poreikiui nurodome, jog aprašymas bus privalomas ir jo duomens tipas bus arba stringas arba null
}

type FullVideoType = VideoType & VideoWithComments;

const video : FullVideoType = {
    id: 1,
    title: 'Rinkimų aptarimas',
    description: 'Labai šaunūs rinkimai buvo. Nuostabus serialas.',
    totalComments: 500,
    topAuthor: 'Andrius Tapimas'
}

video.category = 15;

// GENERICS APRAŠYMAS

const formatData = <ManoTipas>(data: ManoTipas) => {
    if(typeof data === 'number') {
        return `<h1>${data}</h1>`;
    } else if(typeof data === 'string') {
        return `<h2>${data}</h2>`;
    }
}

console.log(formatData<number>(15));

// MASYVO DEKLARAVIMAS SU PASIRINKTU OBJEKTO TIPU
const videoData : FullVideoType[] = [
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

// FETCHING RESPONSE PAVYZDYS

type ResponseType = {
    message: string | null,
    status: string
}

const getData = (response : ResponseType) => {
    if(response.status === 'success')
        return `
            <img src="${response.message}" />
        `;

    return 'Failed to fetch';
}

fetch('https://dog.ceo/api/breeds/image/random')
.then(resp => resp.json())
.then((resp : ResponseType) => {
    document.write(getData(resp));
});


