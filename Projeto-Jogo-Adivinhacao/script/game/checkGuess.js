import { gameState } from "../game/gameState.js";
export function checkGuess(guessInput, randomNumber, feedbackP) {
  if (Number(guessInput.value) < 0 || Number(guessInput.value) > 100) {
    window.alert("Escolha um número de 0 à 100!");
    guessInput.value = "";
    return false;
  } else if (guessInput.value.trim() === "") {
    window.alert("Digite um número de 0 à 100!");
    guessInput.value = "";
    return false;
  } else {
    gameState.secretNumber = randomNumber;
    if (Number(guessInput.value) != randomNumber) {
      if (Number(guessInput.value) > randomNumber) {
        feedbackP.innerHTML = `<strong>Muito alto!</strong>`;
        return false;
      } else if (Number(guessInput.value) < randomNumber) {
        feedbackP.innerHTML = `<strong>Muito baixo!</strong>`;
        return false;
      }
    } else {
      feedbackP.innerHTML = "<strong>Parabéns!!!</strong> Você acertou!";
      guessInput.disabled = true;
      document.getElementById("gameButton").disabled = true;
      return true;
    }
  }
}
