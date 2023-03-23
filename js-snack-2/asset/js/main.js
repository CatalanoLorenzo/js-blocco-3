/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */
//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
const amici_di_topolino_e_fabio = ['pippo', 'PLUTO', 'Paperino']
const amiciDiTopolino = amici_di_topolino_e_fabio.map((nome) => {
    let name = nome[0].toUpperCase()
    let namemin = nome.toLocaleLowerCase()
    name += namemin.slice(1)
    return name
}  )
console.log(amici_di_topolino_e_fabio)
console.log(amiciDiTopolino);