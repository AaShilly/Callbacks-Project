/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    let words = sentence.split(" ");    //Splits sentence into array of words

    //uses map method to apply a cb function to each element of words array and map it into newWords array
    newWords = words.map((word) => {
        //for loop through each key suffix within the object
        for (let suffix in obj){
            //Checks whether current word ends with the current suffix key
            //if it does it'll return it's callback function (Obj value) to the map method function
            if (word.endsWith(suffix)){
                let callback = obj[suffix];

                return callback(word);
            }
        }
        //If the word does not contain any suffix it will map the original word to the array
        return word;
    });
    //Return the newly modified array
    return newWords.join(" ");
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
