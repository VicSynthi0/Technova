
console.log("Hello World");


// statement
let finegirl= "nkem";



// case sensitivity 
let fineGirl = "Munirat";


// Variables
// assigns a name to a value
/*
identifier (name) = value;
*/

// declaration is letting js know about the name of the container
let _finegirl;

// inistialisation is assigning a value to a variable
_finegirl = "Emmanuella";

let fineboy = "Adebayo";

// const keyword
// This means that if you can initialize a variable when you
const myName = "Kachi";
console.log(myName);

// Datatypes
/* Numbers
1234567890
integers
floats
Nan - not a number
*/

const myInt = 5;
const myFloat = 7.7;

console.log(typeof myInt);

// common operators
// +, -, *, /, ++. --, **, %

let tester = 0;
console.log(tester)
tester += 9;

//tester++ is trying to do this tester = tester + 1;
console.log(tester);


//strings
""
// concatenation

let quote1 = "Today is the Lord has made";
let quote2 = "I will rejoice and be glad";

console.log(quote1 + " " + quote2);

// template literal
let fullQuote = `${quote1}


${quote2}`;
console.log(fullQuote);

//string methods
let test = "House";
let tester1 = "house";
console.log(test);


let season = "Harmattan";
let response;

if(season === "Summer"){
    response = "It is very hot";
}
else if (season === "winter"){
    response = "it is harmattan, so it is similar";
}

else if (season === "spring"){
 response = "E too dey rain for spring";
}

else{
  response =  "Omoh i don't even know :)))";
}

response = (season === "summer")
? "The weather is hot"
: "iam not sure what is happening to my keyboard";

console.log(response)


let score = 85;
let attendance = 45;

if (score >= 80){
  
    if(attendance >= 80){
     console.log("Passed the test")
    }

    else{
        console.log("Passed but failed due to low attendance")
    }

}

else{
    console.log("Failed the Test")
}


let age = 20;
let canVote = age >= 18 ?
 "Yes" : "No";
 console.log(canVote)


 const day = "Monday";

 switch (day) {
    case "Monday":
     console.log("it is the start of a new week");
     break;
     case "Friday":
        console.log("Weekend is Here");
        default:
            console.log("Just A regular day")
     }
 let count = 0;
 
 while (count <= 3) {
    console.log(count);
    count++;
 }



let a = 3;
let b = 4;
let c = a + b;
console.log(c);

for (let l = 1; l <= 5; l++){
    console.log(l);
}

const word = "Code";
for (const letter of word){
    console.log(letter);
}

const siblings = ["David", "Victory", "Dunamis"]
for (let sibling of siblings){

    if (sibling === "Victory"){
    console.log('${sibling} is a good guy')}

else {
    console.log('${sibling} is very bad')
}
 }

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2026
}

for(const vehicle in car){
    console.log(vehicle + ":" + car[vehicle]);
}




const detail = {
    Name: "Vicory",
   Childhood: "Nonsense",
    Age: 16
}

for (person in detail)
    console.log(person + ":" + detail[person]);

// addEventListener(() => {})
    () => {
     // block of code
    }

    const arsenalWinstheLeague = () => "Champions Champions";

    console.log(arsenalWinstheLeague);


    const addNumbers = (a,b) => a + b;

    console.log(addNumbers (3,7))


    const divideNumbers  = (a,b) => a / b;
    console.log(divideNumbers(20, 5));


    const subNumbers = function(a,b){
    return a - b;}
    
    console.log(subNumbers(1000, 5));



















const mumNumbers = (a,b) => a * b;
console.log(mumNumbers (40,50));