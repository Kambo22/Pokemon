Welcome to the Guess the Pokémon Generation game! This project is a fun and interactive web game where players must guess the generation of a randomly displayed Pokémon sprite. Below is a guide to help you understand how the code is structured and what each part does.

HTML Structure:
The HTML structure consists of a simple layout with a header, an image for displaying the Pokémon sprite, a div for generation buttons, and a game over screen.
code
Title and Headers: Provides the game title and main heading.
Image Element: Displays the Pokémon sprite.
Generation Buttons Div: Contains buttons for each generation guess.
Game Over Div: Displays the game over screen and a button to restart the game.
Script Inclusion: Links to the script.js file containing the game logic.
JavaScript Code (script.js)
The JavaScript code contains the game logic, fetching Pokémon data, displaying elements, and handling user interactions.

Constants and Variables:
code
pokemonApiUrl: The base URL for the Pokémon API.
maxGenerations: The total number of Pokémon generations.
generationNames: An array of generation names.
correctGeneration: Stores the correct generation for the current Pokémon.
currentPokemon: Stores the data of the current Pokémon.

Fetching and Displaying Pokémon:
code

fetchRandomPokemon(): Fetches data for a random Pokémon and sets it up for display.
displayPokemon(spriteUrl): Updates the image element with the fetched Pokémon sprite.

Displaying Generation Buttons:
code

displayGenerationButtons(): Displays buttons for guessing the Pokémon generation.
generateRandomGenerations(correctGen): Generates an array of generations including the correct one and three incorrect ones.
shuffleArray(array): Shuffles the array to randomize the button order.
getGenerationName(generation): Returns the name of a generation given its identifier.

Handling User Guesses and Game Over:
code

handleGuess(guessedGeneration): Checks if the user's guess is correct and handles the logic for correct and incorrect guesses.
gameOver(): Displays the game over screen.
resetGame(): Resets the game to allow for a new round.

Event Listeners and Initialization:
code

Event Listener: Adds an event listener to the "Play Again" button to reset the game.
Initialization: Calls the functions to fetch a random Pokémon and display generation buttons when the page loads.

With this guide, you should have a clear understanding of how the Guess the Pokémon Generation game is structured and how each part of the code contributes to the functionality of the game. Enjoy coding and improving your game!
