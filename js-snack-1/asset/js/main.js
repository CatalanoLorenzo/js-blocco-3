/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione ('benzina', diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a 'benzina', nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */


//Crea un array composto da 10 automobili. 
//Ogni oggetto automobile avrà le seguenti proprietà: 
//marca, modello e alimentazione ('benzina', diesel, gpl, elettrico, metano).
const cars = [
    {
        marca:'Toyota',
        modello:'Corolla',
        alimentazione:'benzina',
    },
    {
        marca:'Ford',
        modello:'Focus',
        alimentazione:'benzina'
    },
    {
        marca:'Honda',
        modello:'Civic',
        alimentazione:'benzina'
    },
    {
        marca:'Volkswagen',
        modello:'Golf', 
        alimentazione:'benzina'
    },
    {
        marca:'Nissan', 
        modello:'Leaf',
        alimentazione:'elettrica'
    },
    {
        marca:'Tesla', 
        modello:'Model S',
        alimentazione:'elettrica'
    },
    {
        marca:'BMW',
        modello:'i3',
        alimentazione:'elettrica'
    },
    {
        marca:'Toyota', 
        modello:'Prius', 
        alimentazione:'ibrida'
    },
    {
        marca:'Lexus', 
        modello:'RX 450h',
        alimentazione:'ibrida'
    },
    {
        marca:'Chevrolet',
        modello:'Matiz',
        alimentazione:'GPL'
    }
]
//Dividi le automobili in 3 array separati: nel primo array solo le auto a 'benzina', nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const cars_benzina = cars.filter ((alimentazione) => alimentazione.alimentazione == 'benzina')
const cars_disel = cars.filter ((alimentazione) => alimentazione.alimentazione == 'disel')
const cars_remain = cars.filter ((alimentazione) => alimentazione.alimentazione != 'disel' && alimentazione.alimentazione != 'benzina')
console.log(cars_benzina)
console.log(cars_disel)
console.log(cars_remain)