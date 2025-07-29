import { checkGuess } from "../game/checkGuess.js";
import { generateNumber } from "../game/generateNumber.js";

export function showGame() {
  const randomNumber = generateNumber();
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `
  <h3 id="gameTitle" class="gameTitle" >Adivinhe o número: </h3>
  <input type="number" id="guessInput" class="guessInput" min="0" max="100">
  <button type="button" id="gameButton" class="gameButton" >Palpitar</button>
  <p id="feedback" class="feedback"></p>
  <div id="guessHistory" class="guessHistory">
  <h3 id="historyTitle" class="historyTitle">Histórico de palpites:</h3>
  <p id="guess" class="guess"></p>
  </div>
  `;
  const gameButton = document.getElementById("gameButton");
  const guessInput = document.getElementById("guessInput");
  const feedback = document.getElementById("feedback");
  const guess = document.getElementById("guess");
  gameButton.addEventListener("click", () => {
    checkGuess(guessInput, randomNumber, feedback, guess);
  });
}
