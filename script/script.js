function storyForm(){
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const animal = document.getElementById("dropdown").value;
    const color = document.querySelector("radio").value;
    const sense = document.querySelector("checkbox").value;
    const part = document.getElementById("part").value;
    const word = document.querySelector("word").value;
    const story = toString(name, number, animal, color, sense, part, word);
    console.log(name);
}