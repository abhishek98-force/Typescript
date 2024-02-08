//type aliasas

type Guitar = {
    name? : string,
    age : number,
    active : boolean,
    albums : (string|number)[]
}

type alby = Guitar;

type numberOrString = number | string;
type assing = numberOrString;

//type literal

//type literal can help us to restrinc the value of a variable to a specific set of values
let data : 'Anu' | 'Abhi' | 'Abhishek';
data = 'Abhishek';

//type literal and aliases help us to keep the code dry (do not repeat yourself)



let addNumber  = (a: number , b: number) => {
    return a+b;
}

let display = (input : any) => {
    console.log(display);
}

display(addNumber(1,2))
display(addNumber(5,6))
// display(addNumber('1',2))


//optional parameter in a function and type guard

let optionalAdd = (a:number, b: number, c?:number): number => { //only the last parameter can be optional
    if( typeof c !== 'undefined'){  //typeof return string
        return  a+b+c;
    }
    return a+b;
}

console.log(optionalAdd(5,6));
console.log(optionalAdd(2,3,4));

//default values into function arguments

let defaultAdd = (a:number = 6, b:number, c:number = 7): number => {
    return a+b+c;
}

console.log(defaultAdd(undefined,5));
console.log(defaultAdd(4,4,6));


//another important feature is rest operator

const restAdd = (a:number , ...numbers : number[]): number => {
    return a+ numbers.reduce((prev, cur) => prev+cur); //the reason we dont have to give type her
                                                       //is becuase typescript already understands it
}

console.log(restAdd(1,2,3,4,5));

//never type 
//never type is used in functions returning error

const errorFunc = (errorStr : string) => {
    throw new Error('Error');
}

//if its an endless loop and you dont define return type it would be never
//Therefore it is always safe to give a return type other than never except when you want the function
//return an error
const neverFunc = () => {
    let i : number =1 ;
    while(true){
        i++;
        if(i==100){
            return;
        }
    }
}

//it is common practice to define type guards in this fashion
const isNumber = (input : any):boolean => {
    return typeof input === 'number';
}

const isString = (input : any):boolean => {
    return typeof input === 'string';
}

const numberOrString = (value : (number | string)):string => {

    if(isString(value)) return 'string';
    if(isNumber(value)) return 'number';
    return errorFunc('Error');

}
//you can use a function which return a never to close the function . does not matter the
//return type of the error


