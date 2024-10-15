import { test, expect } from 'vitest';
import { sum } from '../helpers/common.js';

test('Mano pirmas testas', () => {
    // Teste norimi atlikti veiksmai:
    // Nustatome veiksmus kurie bus atliekami
    // Nurodome duomenis
    // Tikriname rezultatą

    const rezult = sum(3, 2);
    
    expect(rezult).toBe(5);
});

test('Turėtų grąžinti atgal pasisveikinimą', () => {
    //Teste norimi atlikti veiksmai
});

test('Mano trecias testas', () => {
    //Teste norimi atlikti veiksmai
});