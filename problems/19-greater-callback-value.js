/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(value, cb1, cb2) {
    //sets a variable to the return value of each callback function with the argument value
    let cbValue1 = cb1(value);
    let cbValue2 = cb2(value);
    //returns cb value 1 if it is greater then cb value 2
    if (cbValue1 > cbValue2){
        return cbValue1;
    }
    //returns cb value 2 if cb value 2 is greater than value 1
    return cbValue2;
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
