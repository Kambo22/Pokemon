const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const maxGenerations = 8;
const generationNames = [
    "Generation I", 
    "Generation II", 
    "Generation III", 
    "Generation IV", 
    "Generation V", 
    "Generation VI", 
    "Generation VII", 
    "Generation VIII"
];
let correctGeneration;
let currentPokemon;

// Function to fetch a random Pokémon
async function fetchRandomPokemon() {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1; 
    const response = await fetch(`${pokemonApiUrl}${randomPokemonId}`);
    const data = await response.json();
    currentPokemon = data;
    displayPokemon(data.sprites.front_default);
    correctGeneration = data.species.name;
    displayGenerationButtons();
}

//Display the Pokémon sprite
function displayPokemon(spriteUrl) {
    const pokemonImage = document.getElementById('pokemon-sprite');
    pokemonImage.src = spriteUrl;
}

//Display generation buttons
function displayGenerationButtons() {
    const generationButtons = document.getElementById('generation-buttons');
    generationButtons.innerHTML = ''; // Clear previous buttons
    const generations = generateRandomGenerations(correctGeneration);
    generations.forEach(generation => {
        const button = document.createElement('button');
        button.textContent = generation === correctGeneration ? getGenerationName(generation) : generation;
        button.addEventListener('click', () => handleGuess(generation));
        generationButtons.appendChild(button);
    });
}

// Function to generate 3 incorrect generations and 1 correct generation
function generateRandomGenerations(correctGen) {
    const generations = [];
    generations.push(correctGen);
    while (generations.length < 4) {
        const randomGenIndex = Math.floor(Math.random() * maxGenerations);
        const randomGen = generationNames[randomGenIndex];
        if (!generations.includes(randomGen) && randomGen !== correctGen) {
            generations.push(randomGen);
        }
    }
    return shuffleArray(generations);
}

// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get generation name from its identifier
function getGenerationName(generation) {
    const genIndex = generationNames.indexOf(generation);
    return generationNames[genIndex];
}

//handle guess
function handleGuess(guessedGeneration) {
    if (guessedGeneration === correctGeneration) {
        alert('Correct! You earned 1 point.');
        fetchRandomPokemon();
        displayGenerationButtons(); // Call displayGenerationButtons() after a correct guess
    } else {
        gameOver();
    }
}

//display game over screen
function gameOver() {
    const gameOverScreen = document.getElementById('game-over');
    const generationButtons = document.getElementById('generation-buttons');
    generationButtons.style.display = 'none';
    gameOverScreen.style.display = 'block';
}

//reset the game
function resetGame() {
    const gameOverScreen = document.getElementById('game-over');
    const generationButtons = document.getElementById('generation-buttons');
    generationButtons.style.display = 'block'; // Ensure generation buttons are visible
    gameOverScreen.style.display = 'none';
    fetchRandomPokemon();
}

//play again button
document.getElementById('play-again').addEventListener('click', function() {
    resetGame();
});

// Initialize the game
fetchRandomPokemon();
displayGenerationButtons();