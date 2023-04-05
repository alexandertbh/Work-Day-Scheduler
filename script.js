//select "header-today" span, "schedule" "save"

//Function GetAPI

//function save data
//declare time, day, and input variables in an object
// save them based on their index point

//function add times to each section
// for loop that iterates the time in each section + 1 hour using day.js

//function render previous inputs
//parse local storage
//text.content onto the correct inputs based on index position

//add event listener for clicking save icon for local storage

//API Syntax + forloop
function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = "https://api.github.com/users/alexandertbh/repos";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement("li");

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}
