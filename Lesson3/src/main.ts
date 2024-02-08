let tuple:[string, number, boolean] = ['Dave', 52, true] ;
let mixedArr = [1, "Dave", "Arun", false];
let mixedArr2 = ["Dave", "1", true, false];
//tuple = mixedArr2 ;

let myObj : object = tuple; //yes tuple is an object

let myString = ['name', 'abhishke'];
myString.push('data');


type Guitar = {
    name? : string,
    age : number,
    active : boolean,
    albums : (string|number)[]
}

let kp : Guitar = {
    age : 78,
    active : true,
    albums : [1,2,3,4]
}
console.log(kp);

let jp : Guitar = {
    name : "jaya prakash",
    age : 67,
    active : true,
    albums : [1,2, "Hello"]
}


