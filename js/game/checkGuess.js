import { gameState } from "./gameState.js";
import { createRestartButtons } from "../utils/domUtils.js";
const principalSection = document.getElementById("principalSection");
const guess = document.getElementById("guess");

export function checkGuess(guessInput, randomNumber, feedbackP, guessP) {
  let guessNumber = Number(guessInput.value);

  if (guessInput.value.trim() === "") {
    window.alert("Digite um número de 0 à 100!");
    guessInput.value = "";
    return false;
  }

  if (guessNumber < 0 || guessNumber > 100) {
    window.alert("Escolha um número de 0 à 100!");
    guessInput.value = "";
    return false;
  }

  gameState.secretNumber = randomNumber;

  gameState.guess.push(guessNumber);
  guessP.innerHTML = gameState.guess.join(" - ");
  guessInput.value = "";

  if (guessNumber === randomNumber) {
    feedbackP.innerHTML = "<strong>Parabéns!!!</strong> Você acertou!";
    guessInput.disabled = true;
    document.getElementById("gameButton").disabled = true;
    createRestartButtons();
    return true;
  }

  if (gameState.guess.length == 10) {
    feedbackP.innerHTML = `<strong>Perdeu :( </strong> o Número era ${randomNumber}!`;
    guessInput.disabled = true;
    document.getElementById("gameButton").disabled = true;
    createRestartButtons();
    return false;
  }

  if (guessNumber < randomNumber) {
    feedbackP.innerHTML = `<strong>Muito baixo!</strong>`;
  } else {
    feedbackP.innerHTML = `<strong>Muito alto!</strong>`;
  }

  return false;
}
