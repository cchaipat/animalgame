
const animals = [
    {
        name: "lion",
        src: "images/lion.jpg",
        skin_type: "dry",
        hair: "fur",
        scales: "no",
        movement: "4 legs",
        birth_method: "live birth",
        birthplace: "land",
        feeding_young: "milk"
    },
    {
        name: "elephant",
        src: "images/elephant.jpg",
        skin_type: "dry",
        hair: "fur",
        scales: "no",
        movement: "4 legs",
        birth_method: "live birth",
        birthplace: "land",
        feeding_young: "milk"
    },
    // {
    //     name: "penguin",
    //     src: "images/penguin.jpg",
    //     skin_type: "dry",
    //     hair: "feathers",
    //     scales: "no",
    //     movement: "wings and legs",
    //     birth_method: "eggs",
    //     birthplace: "land",
    //     feeding_young: "regurgitated food"
    // },
    {
        name: "frog",
        src: "images/frog.jpg",
        skin_type: "moist",
        hair: "none",
        scales: "no",
        movement: "4 legs",
        birth_method: "eggs",
        birthplace: "water",
        feeding_young: "no milk"
    },
    {
        name: "kangaroo",
        src: "images/kangaroo.jpg",
        skin_type: "dry",
        hair: "fur",
        scales: "no",
        movement: "4 legs",
        birth_method: "live birth",
        birthplace: "land",
        feeding_young: "milk"
    },
    // {
    //     name: "snake",
    //     src: "images/snake.jpg",
    //     skin_type: "dry",
    //     hair: "none",
    //     scales: "yes",
    //     movement: "slithers",
    //     birth_method: "eggs",
    //     birthplace: "land",
    //     feeding_young: "no milk"
    // },
    {
        name: "dolphin",
        src: "images/dolphin.jpg",
        skin_type: "moist",
        hair: "none",
        scales: "no",
        movement: "fins",
        birth_method: "live birth",
        birthplace: "water",
        feeding_young: "milk"
    },
    {
        name: "chicken",
        src: "images/chicken.jpg",
        skin_type: "dry",
        hair: "feathers",
        scales: "no",
        movement: "2 legs",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "no milk"
    },
    {
        name: "crocodile",
        src: "images/crocodile.jpg",
        skin_type: "dry",
        hair: "none",
        scales: "yes",
        movement: "4 legs",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "no milk"
    },
    {
        name: "bird",
        src: "images/bird.jpg",
        skin_type: "dry",
        hair: "feathers",
        scales: "no",
        movement: "wings",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "no milk"
    },
    {
        name: "turtle",
        src: "images/turtle.jpg",
        skin_type: "dry",
        hair: "none",
        scales: "yes",
        movement: "4 legs",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "no milk"
    },
    {
        name: "whale",
        src: "images/whale.jpg",
        skin_type: "moist",
        hair: "none",
        scales: "no",
        movement: "fins",
        birth_method: "live birth",
        birthplace: "water",
        feeding_young: "milk"
    },
    {
        name: "lizard",
        src: "images/lizard.jpg",
        skin_type: "dry",
        hair: "none",
        scales: "yes",
        movement: "4 legs",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "no milk"
    },
    {
        name: "fish",
        src: "images/fish.jpg",
        skin_type: "moist",
        hair: "none",
        scales: "yes",
        movement: "fins",
        birth_method: "eggs",
        birthplace: "water",
        feeding_young: "no milk"
    },
    {
        name: "platypus",
        src: "images/platypus.jpg",
        skin_type: "dry",
        hair: "fur",
        scales: "no",
        movement: "4 legs",
        birth_method: "eggs",
        birthplace: "land",
        feeding_young: "milk"
    },
];

let currentProperty = "";  // To store the randomly chosen property

const properties = ["skin_type", "hair", "scales", "movement", "birth_method", "birthplace", "feeding_young"];

function shuffleAnimals() {
    animals.sort(() => Math.random() - 0.5);
}

function groupByProperty() {
    currentProperty = properties[Math.floor(Math.random() * properties.length)];
    
    const group1 = animals.filter(animal => animal[currentProperty] === animals[0][currentProperty]);
    const group2 = animals.filter(animal => animal[currentProperty] !== animals[0][currentProperty]);
    
    displayGroups(group1, group2);
}

function displayGroups(group1, group2) {
    const group1Container = document.getElementById("group1");
    const group2Container = document.getElementById("group2");

    group1Container.innerHTML = "";
    group2Container.innerHTML = "";

    group1.forEach(animal => {
        const img = document.createElement("img");
        img.src = animal.src;
        img.alt = animal.name;
        img.style.width = "100px";
        group1Container.appendChild(img);
    });

    group2.forEach(animal => {
        const img = document.createElement("img");
        img.src = animal.src;
        img.alt = animal.name;
        img.style.width = "100px";
        group2Container.appendChild(img);
    });
}

function checkGuess() {
    const guess = document.getElementById("property-guess").value;
    const resultDiv = document.getElementById("result");

    if (guess === currentProperty) {
        resultDiv.textContent = "Correct! The animals were grouped by: " + currentProperty.replace("_", " ");
        resultDiv.classList.add("correct");
        resultDiv.classList.remove("incorrect");
    } else {
        resultDiv.textContent = "Not quite! Try again.";
        resultDiv.classList.add("incorrect");
        resultDiv.classList.remove("correct");
    }
}

function startGame() {
    shuffleAnimals();
    groupByProperty();
}

document.getElementById("submit-btn").addEventListener("click", checkGuess);

window.onload = startGame;
