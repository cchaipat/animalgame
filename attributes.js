
const animalsAttributes = [
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
    // {
    //     name: "shark",
    //     src: "images/shark.jpg",
    //     skin_type: "moist",
    //     hair: "none",
    //     scales: "yes",
    //     movement: "fins",
    //     birth_method: "live birth or eggs",
    //     birthplace: "water",
    //     feeding_young: "no milk"
    // },
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
    }
];

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentAnimalIndex = 0;
let score = 0;

function loadAnimalAttributes() {
    const animalImage = document.getElementById("animal-image");
    const currentAnimal = animalsAttributes[currentAnimalIndex];

    // Load the current animal's image
    animalImage.src = currentAnimal.src;

    // Clear previous inputs and result message
    document.getElementById("skin-type").value = "";
    document.getElementById("hair-type").value = "";
    document.getElementById("scales").value = "";
    document.getElementById("movement").value = "";
    document.getElementById("birth-method").value = "";
    document.getElementById("birthplace").value = "";
    document.getElementById("feeding-young").value = "";
    document.getElementById("result").textContent = "";
    
    // Enable the submit button
    document.getElementById("submit-btn").disabled = false;
}

function checkAttributes() {
    const currentAnimal = animalsAttributes[currentAnimalIndex];

    // Get the player's selected answers from dropdowns
    const skinTypeInput = document.getElementById("skin-type").value;
    const hairTypeInput = document.getElementById("hair-type").value;
    const scalesInput = document.getElementById("scales").value;
    const movementInput = document.getElementById("movement").value;
    const birthMethodInput = document.getElementById("birth-method").value;
    const birthplaceInput = document.getElementById("birthplace").value;
    const feedingYoungInput = document.getElementById("feeding-young").value;

    // Check if the player's answers match the animal's attributes
    const correctAnswers = (skinTypeInput === currentAnimal.skin_type &&
                            hairTypeInput === currentAnimal.hair &&
                            scalesInput === currentAnimal.scales &&
                            movementInput === currentAnimal.movement &&
                            birthMethodInput === currentAnimal.birth_method &&
                            birthplaceInput === currentAnimal.birthplace &&
                            feedingYoungInput === currentAnimal.feeding_young);

    const resultDiv = document.getElementById("result");

    if (correctAnswers) {
        resultDiv.textContent = "Correct!";
        score++;
        // Move to the next animal after 2 seconds
        currentAnimalIndex = (currentAnimalIndex + 1) % animalsAttributes.length;
        setTimeout(loadAnimalAttributes, 2000);
    } else {
        resultDiv.textContent = "Try again!";  // Let them keep trying
        document.getElementById("submit-btn").disabled = false;  // Re-enable submit button
    }
}

document.getElementById("submit-btn").addEventListener("click", function() {
    // Disable submit button to prevent double submissions
    document.getElementById("submit-btn").disabled = true;
    checkAttributes();
});

// Shuffle animals and start the game
window.onload = function() {
    shuffle(animalsAttributes); // Shuffle the array when the page loads
    loadAnimalAttributes();
};