//select "header-today" span, "schedule" "save"
var header = document.getElementById("currentDay");
var time = document.getElementById("time");
var userTask = document.getElementById("user-task");
var saveBtn = document.querySelectorAll(".saveBtn");
var hourEl = document.getElementById("hourSection");
var description = document.querySelectorAll(".description");

//var for object storage
var objectStore = {};

//vars for current and updated time in hours
var currentHour = dayjs().format("HH");

// day.js for today header
var today = dayjs();
today.format("dddd", "MMMM");
console.log(today);
header.textContent = today;

//function for savinginput
function saveInput(event) {
  for (var i = 0; i < saveBtn.length; i++) {
    objectStore[i] = description[i].value;
    localStorage.setItem("Schedule Items", JSON.stringify(objectStore));
  }
}
//functuons for pull and parsing data from local storage then appending onto the line items
var lastItems = JSON.parse(localStorage.getItem("Schedule Items"));
function render() {
  var lastItems = JSON.parse(localStorage.getItem("Schedule Items"));
  console.log(lastItems);
  for (var i = 0; i < description.length; i++) {
    if (lastItems[i] != " ") {
      description.textContent = lastItems[i];
      description[i].append(lastItems[i]);
    }
  }
}

//call the render function to pull info from local storage
render();

//for loop for the event listeners add event listener for clicking save icon for local storage

for (let i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", saveInput);
}
