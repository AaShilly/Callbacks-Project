/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
        let smallest = arr[0]; //set initial smallest value to initial array element
        //loop through array checking whether each element is smaller than the current smallest
        for (let i = 0; i < arr.length; i++){
            let el = arr[i];

            if (smallest > el){
                smallest = el;
            }
        }
    //if no cb function is passed in the function will return the smallest num
    if (cb === undefined){
        return smallest;
    }
    //if a cb is provided the smallest num will return once it's ran through the cb function
    return cb(smallest);
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
