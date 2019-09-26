// JavaScript Document

//create an array called cats that holds a variety of cat names 

let cats = ["Bill", "Fluffy", "Jeff", "Tiger", "Stevie Nicks"];

// create a variable called info and assign  it the text value of "My cats are called "

let info = "My cats are called "; 

// create a variable called para and bind the first paragraph element to this variable. 

let para = document.querySelector("p");

//here's our for loop 

for(let i = 0; i < cats.length; i++) {
  // if we are on the last iteration, put and a period at the end 
  if( i === cats.length - 1) {
    info += "and " + cats[i] + "."; 
  }
  else {
    info += cats[i] + ", "; 
  }
} 

para.textContent = info; 

//make all paragraphs red 
let paraGraph = document.querySelectorAll("p"); 

//use a for loop to loop through 

for(let i = 0; i < paraGraph.length; i++) {
  paraGraph[i].style.color = "red"; 
}



















