// JavaScript Document

//declear var
let select = document.getElementById("class");
let output = document.getElementById("result");

//use onchange to detect user input
select.onchange = setClass; // calls setClass method when there is a change

//function setClass
function setClass() {
  // declearing variables used in this loop that needs to be reset every loop.
  // full instructor list off black board
  let instructorList = [
    "Maziar Shajari",
    "Ben Blanc",
    "Jessica Gilfillan",
    "Justin Hunt",
    "Tim Patrick",
    "Jessica Krelove"
  ];
  // full student list off google docs
  let studentList = [
    "Linh Duong",
    "Brea Parker",
    "Danil Borisov",
    "Haider Malik",
    "Deep Parmar",
    "Yuki Miyazawa",
    "Michael Valadao - Martins",
    "Yolanda Hames",
    "Matt Hames",
    "Tylor Wichiciel",
    "Navneet Singh",
    "Meisam Koohaki",
    "Edwin Christie",
    "Mariana Lima",
    "Norah Alharbi",
    "Kiril Mankovskyi",
    "Vy Hoang",
    "Mark Song",
    "Kirill Barsukov",
    "Noah Hawke",
    "Andrew Reid",
    "Mason Ferrie",
    "Mark Sporich",
    "Ambuj Bho",
    "Owen Brown",
    "Nicole Gray",
    "Simarpreet Singh",
    "Gurasees Singh Tehria",
    "Elias Aguilera",
    "Prabhat Batra",
    "Jaime Tavares",
    "Preet Nakrani",
    "Drake Esdon"
  ];
  let greetingMessage = "hello, ";
  let message = "";
  let lastGreet = "and hello, ";
  let noOptionMessage = "Select a list to get started.";

  var choice = select.value;

  if (choice === "teacher") {
    // looping through instructor list array's max length and greeting every instructor.
    for (let i = 0; i < instructorList.length; i++) {
      if (i === instructorList.length - 1) {
        message += lastGreet + instructorList[i];
      } else {
        message += greetingMessage + instructorList[i] + ", ";
      }
      output.textContent = message;
    }
  } else if (choice === "student") {
    /// looping through student list array's max length and greeting every student.
    for (let k = 0; k < studentList.length; k++) {
      if (k === studentList.length - 1) {
        message += lastGreet + studentList[k];
      } else {
        message += greetingMessage + studentList[k] + ", ";
      }
      output.textContent = message;
    }
  } else {
    // if no options are selected output a message.
    output.textContent = noOptionMessage;
  }
}
