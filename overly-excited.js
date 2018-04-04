// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["Four", "score", "and", "seven", "years", "ago"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, punct) => {
    let buildMeUp = "";
    let pCount = 0;
    let bangs = '';
    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if ((i + 1) % 3 === 0 ) {
            pCount ++;
            bangs += punct;
            buildMeUp += ` ${theWordArray[i]}${bangs}`
        } else {
        buildMeUp += ` ${theWordArray[i]}`;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
 };


// function addExcitement () {
    
//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = "";
//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         if ((i + 1) % 3 === 0 ) {
//             buildMeUp += ` ${theWordArray[i]}${punct}`
//         } else {
//         buildMeUp += ` ${theWordArray[i]}`;
//         }
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }

// }

// Invoke the function and pass in the array
addExcitement(nextSentence, "?");