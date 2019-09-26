// JavaScript Document

//declare and initialize variables using let 
let select = document.getElementById("weather"); 
let para = document.getElementById("content"); 
let body = document.querySelector("body"); 
let temperature = 30; 

//use onchange to detect change (the user picks a different option)

select.onchange =  setWeather;
//define the setWeather function 

function setWeather() {
  var choice = select.value; 
  
  if(choice === "sunny") {
    body.style.backgroundColor = "orange"; 
    
    if (temperature < 30) {
      para.textContent = "It is " + temperature + "nice and sunny!"; 
    }
    else if (temperature >= 30) {
      para.textContent = "It is " + temperature + "SO HOT!";
    }
  }
  else if (choice === "rainy") {
    para.textContent = "It's raining!! Bring your umbrella, dude."; 
  }
  else if (choice === "snowing") {
    para.textContent = "Dress warm! Snow today, friend"; 
  }
  else if (choice === "overcast") {
    para.textContent = "No sun today. Boo. "; 
  }
  else {
    para.textContent = " "; 
  }
}
