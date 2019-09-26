// JavaScript Document
//console.log("working"); 

//three ways to declare variables 

var width = 100;
let height = 200; 
const key = 'abc123';

// difference between var & let 
cat = "Stevie"; 
"Stevie"
var cat;
undefined
cat; 
"Stevie"
//kitten = "Shadow";
//let kitten;
//kitten;


// let is block level scope and var is function level scope 

//scope and using var 
//define function 
function adult5(age) {
  if (age > 18) {
    var status = 'adult'; 
  }
  console.log(status); 
}

//invoke or call the function 
adult5(20); 

//scope and using let 

//define the function 
function adult6(age) {
  if (age > 18) {
    let status = 'adult'; 
  }
  console.log(status); 
}

//invoke or call 
adult6(20); 











