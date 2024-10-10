import { pirmas } from './helpers/pirmas.js';
import { antras } from './helpers/antras.js';
import { trecias } from './helpers/trecias.js';
import Header from './components/header.js';


document.querySelector('body').innerHTML = Header();
document.querySelector('body').innerHTML += pirmas();
document.querySelector('body').innerHTML += antras();
document.querySelector('body').innerHTML += trecias();

const random = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

const randomHeader = () => {
    const choises = ['Hello', 'Goodbye'];

    document.querySelector('body').innerHTML += `<h3>${choises[random(0, choises.length - 1)]} World</h3>`;
}

randomHeader();

document.querySelector('body').innerHTML += `<div style="width: 400px; height: 400px; background: red"></div>`;