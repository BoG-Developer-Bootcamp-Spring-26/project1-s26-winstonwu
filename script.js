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
let pokeMoves = [];
let pokeStats = [];
let pokeHeight = 0;
let pokeWeight = 0;
let buttonActive = true;

fetchData();
buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
info.addEventListener("click", getInfo);
moves.addEventListener("click", getMoves);

async function fetchData() {
    const response = await fetch(url+index);
    const data = await response.json();
    const pokeSprite = data.sprites.front_default;
    const pokeName = data.name;
    const pokeType = data.types;
    pokeMoves = data.moves;
    pokeStats = data.stats;
    pokeHeight = data.height;
    pokeWeight = data.weight;

    pokeImage.src = pokeSprite;
    pokeImage.style.display = "block";
    name.innerHTML = pokeName;
    console.log(data);

    
    type.innerHTML = "";
    pokeType.forEach((singleType) => {
        const div = document.createElement('div');
        div.classList.add('types');
        if (singleType.type.name == "normal") {
            div.style.backgroundColor = "#A8A77A";
            div.innerHTML = "normal";
        } else if (singleType.type.name == "fire") {
            div.style.backgroundColor = "#EE8130";
            div.innerHTML = "fire";
        } else if (singleType.type.name == "water") {
            div.style.backgroundColor = "#6390F0"
            div.innerHTML = "water";
        } else if (singleType.type.name == "electric") {
            div.style.backgroundColor = "#F7D02C";
            div.innerHTML = "electric";
        } else if (singleType.type.name == "grass") {
            div.style.backgroundColor = "#7AC74C";
            div.innerHTML = "grass";
        } else if (singleType.type.name == "ice") {
            div.style.backgroundColor = "#96D9D6";
            div.innerHTML = "ice";
        } else if (singleType.type.name == "fighting") {
            div.style.backgroundColor = "#C22E28";
            div.innerHTML = "fighting";
        } else if (singleType.type.name == "poison") {
            div.style.backgroundColor = "#A33EA1";
            div.innerHTML = "poison";
        } else if (singleType.type.name == "ground") {
            div.style.backgroundColor = "#E2BF65";
            div.innerHTML = "ground";
        } else if (singleType.type.name == "flying") {
            div.style.backgroundColor = "#A98FF3";
            div.innerHTML = "flying";
        } else if (singleType.type.name == "psychic") {
            div.style.backgroundColor = "#F95587";
            div.innerHTML = "psychic";
        } else if (singleType.type.name == "bug") {
            div.style.backgroundColor = "#A6B91A";
            div.innerHTML = "bug";
        } else if (singleType.type.name == "rock") {
            div.style.backgroundColor = "#B6A136";
            div.innerHTML = "rock";
        } else if (singleType.type.name == "ghost") {
            div.style.backgroundColor = "#735797";
            div.innerHTML = "ghost";
        } else if (singleType.type.name == "dragon") {
            div.style.backgroundColor = "#6F35FC";
            div.innerHTML = "dragon";
        } else if (singleType.type.name == "dark") {
            div.style.backgroundColor = "#705746";
            div.innerHTML = "dark";
        } else if (singleType.type.name == "steel") {
            div.style.backgroundColor = "#B7B7CE";
            div.innerHTML = "steel";
        } else if (singleType.type.name == "fairy") {
            div.style.backgroundColor = "#D685AD";
            div.innerHTML = "fairy";
        }
        type.appendChild(div);
        });

        if (buttonActive) {
            getInfo();
        } else {
            getMoves();
        }
    }
    
function getMoves() {
    buttonActive = false;
    moves.style.backgroundColor = "#7CFF79";
    info.style.backgroundColor = "#E8E8E8";
    list.innerHTML = "";
    pokeMoves.slice(0,14).forEach((move) => {
        const p = document.createElement('p');
        p.classList.add('moves');
        p.innerHTML = move.move.name;
        list.appendChild(p);
    }) 

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

function getInfo() {
    info.style.backgroundColor = "#7CFF79";
    moves.style.backgroundColor = "#E8E8E8";
    buttonActive = true;
    list.innerHTML = "";
    const heightP = document.createElement('p');
    const weightP = document.createElement('p');
    heightP.classList.add('info');
    weightP.classList.add('info');
    heightP.innerHTML = "height: " + pokeHeight;
    weightP.innerHTML = "weight: " + pokeWeight;

    list.append(heightP, weightP);
    pokeStats.forEach((stat) => {
        const p = document.createElement('p');
        p.classList.add('info');
        p.innerHTML = `${stat.stat.name}: ${stat.base_stat}`;
        list.appendChild(p);
    })
}











