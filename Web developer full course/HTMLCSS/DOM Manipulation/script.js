//BAD WAY
/* document.querySelector("li").style.background = "yellow"; */ 

//GOOD WAY
var h1 = document.querySelector("h1");
h1.className = "firstdom class";
h1.innerHTML = "Hello there";

/* document.querySelectorAll("li")[1].parentElement.parentElement.style.background = "red";
 */

var button = document.querySelector("button");
var body = document.querySelector("body");
button.addEventListener("click", function() {
    if(body.className == "whitebg") {
        body.className = "bluebg";
    }
    else {
        body.className = "whitebg"
    }
})


var listAdd = document.getElementById("addToTheList");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

//Click
listAdd.addEventListener("click", function() {
    if(input.value != "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        input.value = "";
    }
})

//Keypress
input.addEventListener("keypress", function(event) {
    if(input.value != "" && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        input.value = "";
    }
})
