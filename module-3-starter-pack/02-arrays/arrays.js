// JavaScript Document

let output = document.getElementById('content'); 

// declare and initialize an array 
//fun fact - an array with an array inside is called a multi-dimensional array  
let myArray = ['string', true, 100, [1, 2, 3], false]; 

//let firstInfo = myArray[0];
let multi = myArray[3][2]; 
output.textContent = multi;

//determing length of array 
output.textContent = myArray.length; 

//for loop to loop through the info in our array 

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); 
  output.textContent += ', ' + myArray[i]; 
}

//convert a string to an array 

let origSix = 'Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadians'; 

let origSixArray = origSix.split(', ');
console.log(origSixArray); 

output.textContent = origSixArray[2]; 

// how can we output the last element of an array to the screen if we don't know how many elements in the array 

output.textContent = origSixArray[origSixArray.length - 1]; 

//add elements to the array 
origSixArray.push("New York Rangers"); 

//remove elements from the array 

origSixArray.pop(); 































