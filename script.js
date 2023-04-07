//select "header-today" span, "schedule" "save"
var header = document.getElementById("currentDay");
var time = document.getElementById("time");
var userTask = document.getElementById("user-task");
var saveBtn = document.querySelectorAll(".saveBtn");
var hourEl = document.getElementById("hourSection");
var description = document.querySelectorAll(".description");

//var to index off of
var data = 3;

//vars for current and updated time in hours
var currentHour = dayjs().format("HH");
// hourPlus = dayjs().add(dayjs.duration({ hour: 1 }));
// console.log(currentHour + hourPlus);

// var a = dayjs.duration(1, "d");
// var b = dayjs.duration(2, "d");

// a.add(b).days(); // 3
// a.add({ days: 2 }).days();
// a.add(2, "days");
// console.log(a);

// day.js for today header
var today = dayjs();
today.format("MMM D, YYYY");
console.log(today);
header.textContent = today;

//day.js hour plus and minus test

//Function GetAPI

//function save data
//declare time, day, and input variables in an object
// save them based on their index point

function saveInput(event) {
  for (var i = 0; i < saveBtn.length; i++) {
    // console.log([description[i].value]);
    var savedItems = [{ [i]: description[i].value }];
    console.log(savedItems);
    localStorage.setItem("Schedule Items", JSON.stringify(savedItems));
  }
}

function render() {
  for (var i = 0; i < description.length; i++) {
    var lastItems = localStorage.getItem(
      "Schedule Items",
      JSON.parse([description[i].value])
    );
  }
}

// render();
//function add times to each section
// for loop that iterates the time in each section + 1 hour using day.js

//function render previous inputs
//parse local storage
//text.content onto the correct inputs based on index position

//API Syntax + forloop
// var userContainer = document.getElementById("users");
// var fetchButton = document.getElementById("fetch-button");

// function getApi() {
//   var requestUrl = "https://api.github.com/users?per_page=5";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var userName = document.createElement("h3");
//         var gitLink = document.createElement("a");
//         gitLink.href = data[i].html_url;
//         userName.textContent = data[i].login;
//         gitLink.textContent = data[i].html_url;
//         userContainer.append(userName);
//         userContainer.append(gitLink);
//       }
//     });
// }
// fetchButton.addEventListener("click", getApi);

//add event listener for clicking save icon for local storage

for (let i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", saveInput);
}

// create individual divs and do current time plus one and minus one
