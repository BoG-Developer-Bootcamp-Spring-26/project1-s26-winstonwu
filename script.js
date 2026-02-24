const url = "https://pokeapi.co/api/v2/pokemon/";
let index = 1;

const pokeImage = document.getElementById("pokeImage");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const type = document.getElementById("type");
const list = document.getElementById("list");
const info = document.getElementById("info");
const moves = document.getElementById("moves");
const name = document.getElementById("name")


fetchData();
buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
buttonRight.addEventListener("click", moveRight);
buttonRight.addEventListener("click", moveRight);

async function fetchData() {
    const response = await fetch(url+index);
    const data = await response.json();
    const pokeSprite = data.sprites.front_default;
    const pokeName = data.name;
    let pokeType = data.types[0].type.name;

    // accidentally capitalized the if cases lol
    pokeType = pokeType[0].toUpperCase() + pokeType.slice(1);

    pokeImage.src = pokeSprite;
    pokeImage.style.display = "block";
    name.innerHTML = pokeName;
    console.log(data);


    if (pokeType == "Normal"){
        type.style.backgroundColor = "#A8A77A";
        type.innerHTML = "Normal";
    } else if (pokeType == "Fire") {
        type.style.backgroundColor = "#EE8130";
        type.innerHTML = "Fire";
    } else if (pokeType == "Water") {
        type.style.backgroundColor = "#6390F0"
        type.innerHTML = "Water";
    } else if (pokeType == "Electric") {
        type.style.backgroundColor = "#F7D02C";
        type.innerHTML = "Electric";
    } else if (pokeType == "Grass") {
        type.style.backgroundColor = "#7AC74C";
        type.innerHTML = "Grass";
    } else if (pokeType == "Ice") {
        type.style.backgroundColor = "#96D9D6";
        type.innerHTML = "Ice";
    } else if (pokeType == "Fighting") {
        type.style.backgroundColor = "#C22E28";
        type.innerHTML = "Fighting";
    } else if (pokeType == "Poison") {
        type.style.backgroundColor = "#A33EA1";
        type.innerHTML = "Poison";
    } else if (pokeType == "Ground") {
        type.style.backgroundColor = "#E2BF65";
        type.innerHTML = "Ground";
    } else if (pokeType == "Flying") {
        type.style.backgroundColor = "#A98FF3";
        type.innerHTML = "Flying";
    } else if (pokeType == "Psychic") {
        type.style.backgroundColor = "#F95587";
        type.innerHTML = "Psychic";
    } else if (pokeType == "Bug") {
        type.style.backgroundColor = "#A6B91A";
        type.innerHTML = "Bug";
    } else if (pokeType == "Rock") {
        type.style.backgroundColor = "#B6A136";
        type.innerHTML = "Rock";
    } else if (pokeType == "Ghost") {
        type.style.backgroundColor = "#735797";
        type.innerHTML = "Ghost";
    } else if (pokeType == "Dragon") {
        type.style.backgroundColor = "#6F35FC";
        type.innerHTML = "Dragon";
    } else if (pokeType == "Dark") {
        type.style.backgroundColor = "#705746";
        type.innerHTML = "Dark";
    } else if (pokeType == "Steel") {
        type.style.backgroundColor = "#B7B7CE";
        type.innerHTML = "Steel";
    } else if (pokeType == "Fairy") {
        type.style.backgroundColor = "#D685AD";
        type.innerHTML = "Fairy";
    } 


}

function moveLeft() {
    if (index > 1) {
        index -= 1;
    } else {
        index = 1025;
    }
    fetchData();
}

function moveRight() {
    if (index < 1025) {
        index += 1;
    } else {
        index = 1;
    }
    fetchData();
}















