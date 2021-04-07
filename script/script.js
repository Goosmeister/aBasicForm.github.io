function storyForm(){

  // find all the values //
const name = document.form1.name.value;
const color = document.querySelectorAll("input[name=radio]:checked")[0].value;
const animal = document.getElementById("Animal");
const number = document.getElementById("number").value;
const parts = document.getElementById("part");
const area = document.getElementById("area");
const senseArray = [];
const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
const word = document.form1.word.value;
for (var i = 0; i < checkboxes.length; i++) {
  senseArray.push(checkboxes[i].value)
}
const animalName = animal.options[animal.selectedIndex].text;
const partName = parts.options[parts.selectedIndex].text;
const areaName = area.options[area.selectedIndex].text;

// find all the bad words //

var badWord = "";
var keywords = ['fuck', 'ass', 'poes', 'doos', 'piel', 'penis', 'cunt', 'faggot', 'dick', 'asshole', 'shit', 'kak'];
var check = keywords.includes(name);
var checkWord = keywords.includes(word);
if(check == true){
    badWord = "<br><br>* you used a bad word didn't you? " + "'" + name + "' That's naughty!" ;
  }
if(checkWord == true){
    badWord = "<br><br>* you used a bad word didn't you? " + "'" + word + "'  That's naughty!";
  }

// print all the data //

const msg = "Your Friend " + name + ", the " + color + " " + animalName + " with the " + number + " " + partName + " lives in a " + senseArray + " " + areaName + " with his best friend " + word + "! Sorry He can't be your friend at the moment, he already has one." + badWord;
console.log(check);
console.log(name);
document.getElementById("survey-form").style.display = "none";
document.getElementById("Contact").style.display = "none";
document.getElementById("Back").style.display = "block";
document.getElementById("ContactButton").style.display = "none";
const window = document.createElement("p");
window.innerHTML = msg;
document.body.appendChild(window); 
}

//Go back button //

function Back(){
document.getElementById("survey-form").style.display = "flex";
document.getElementById("Contact").style.display = "flex";
document.getElementById("Back").style.display = "none";
document.getElementById("ContactButton").style.display = "block";
const p = document.querySelector("p");
if(p.style.display = "block"){
  p.style.display = "none";
} else{
  p.style.display = "none";
}
}