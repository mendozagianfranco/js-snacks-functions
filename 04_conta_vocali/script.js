/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ['a', 'e', 'i', 'o', 'u'];


// Dichiara la funzione qui.
// function countVowels(word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         let currentLetter = word[i];
//         for (let j = 0; j < vowels.length; j++) {
//             let currentVowel = vowels[j];
//             if (currentLetter === currentVowel) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

const countVowels = word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        for (let j = 0; j < vowels.length; j++) {
            let currentVowel = vowels[j];
            if (currentLetter === currentVowel) {
                count++;
            }
        }
    }
    return count;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)