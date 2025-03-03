/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function firstLetterName(names) {
//     let firstLetters = [];
//     for (let i = 0; i < names.length; i++) {
//         firstLetters.push(names[i][0]);
//     }
//     return firstLetters;
// }


const firstLetterName = names => {
    let firstLetters = [];
    for (let i = 0; i < names.length; i++) {
        firstLetters.push(names[i][0]);
    }
    return firstLetters;
};
// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetterName(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]