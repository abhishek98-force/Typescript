"use strict";
//type aliasas
//type literal
//type literal can help us to restrinc the value of a variable to a specific set of values
let data;
data = 'Abhishek';
//type literal and aliases help us to keep the code dry (do not repeat yourself)
let addNumber = (a, b) => {
    return a + b;
};
let display = (input) => {
    console.log(display);
};
display(addNumber(1, 2));
display(addNumber(5, 6));
// display(addNumber('1',2))
//optional parameter in a function and type guard
let optionalAdd = (a, b, c) => {
    if (typeof c !== 'undefined') { //typeof return string
        return a + b + c;
    }
    return a + b;
};
console.log(optionalAdd(5, 6));
console.log(optionalAdd(2, 3, 4));
//default values into function arguments
let defaultAdd = (a = 6, b, c = 7) => {
    return a + b + c;
};
console.log(defaultAdd(undefined, 5));
console.log(defaultAdd(4, 4, 6));
//another important feature is rest operator
const restAdd = (a, ...numbers) => {
    return a + numbers.reduce((prev, cur) => prev + cur); //the reason we dont have to give type her
    //is becuase typescript already understands it
};
console.log(restAdd(1, 2, 3, 4, 5));
