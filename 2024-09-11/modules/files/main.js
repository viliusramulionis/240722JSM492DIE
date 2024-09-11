import { a, importuotaReiksme } from './a.js';
import { b, sudetis } from './b.js';
// import { pirmas, antras, trecias } from './c.js';
// import c from './c.js';

// Jeigu importuojama reiksme yra nurodoma be riestiniu skliaustu - ji yra standartine (default)
import c, { pirmas, antras, trecias } from './c.js';

console.log(a);
console.log(b);
console.log('Tikrinam ar veikia importuota funkcija sudetis:', sudetis(a, b));
console.log(pirmas, antras, trecias);

console.log(c);

console.log(importuotaReiksme);
