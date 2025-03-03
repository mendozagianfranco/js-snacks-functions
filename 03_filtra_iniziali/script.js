/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function findLetterName(names, letter) {
//     const namesWithLetter = [];
//     const capitalLetter = letter.toUpperCase();

//     for (let i = 0; i < names.length; i++) {
//         let currentName = names[i];
//         if (currentName[0] === capitalLetter) {
//             namesWithLetter.push(names[i]);
//         }
//     }
//     return namesWithLetter;
// }

const findLetterName = (names, letter) => {
    const namesWithLetter = [];
    const capitalLetter = letter.toUpperCase();

    for (let i = 0; i < names.length; i++) {
        let currentName = names[i];
        if (currentName[0] === capitalLetter) {
            namesWithLetter.push(names[i]);
        }
    }
    return namesWithLetter;
};



// Invoca la funzione qui e stampa il risultato in console
console.log(findLetterName(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]