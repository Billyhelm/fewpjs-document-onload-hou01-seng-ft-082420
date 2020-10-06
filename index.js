// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    changeText()
  });

function changeText(){
    let line = document.getElementById("text")
    line.textContent = "This is really cool!"
}