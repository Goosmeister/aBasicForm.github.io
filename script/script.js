function storyForm(){
const name = document.form1.name.value;
const color = document.querySelectorAll("input[name=radio]:checked")[0].value;
var animal = document.getElementById("Animal");
var number = document.getElementById("number").value;
var parts = document.getElementById("part");
var area = document.getElementById("area");
var senseArray = [];
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
const word = document.form1.word.value;
for (var i = 0; i < checkboxes.length; i++) {
  senseArray.push(checkboxes[i].value)
}
const animalName = animal.options[animal.selectedIndex].text;
const partName = parts.options[parts.selectedIndex].text;
const areaName = area.options[area.selectedIndex].text;
const msg = "Hi " + name + " you " + color + " " + animalName + " with the " + number + " " + partName + " that live in a " + senseArray + " " + areaName + " with your best friend " + word + "!";
console.log(msg);
console.log(senseArray);
document.getElementById("survey-form").style.display = "none";
var window = document.createElement("h5");
window.innerHTML = msg;

document.body.appendChild(window); 
}
