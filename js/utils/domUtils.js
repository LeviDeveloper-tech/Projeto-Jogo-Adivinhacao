import { showIntro } from "../views/showIntro.js";
import { showReady } from "../views/showReady.js";

export function createRestartButtons() {
  const principalSection = document.getElementById("principalSection");
  const divRestartButtons = document.createElement("div");
  divRestartButtons.setAttribute("id", "restartButtons");
  divRestartButtons.setAttribute("class", "restartButtons");
  divRestartButtons.innerHTML = `
    <button type="button" id="exitButton" class="exitButton">Sair do Jogo</button>
    <button type="button" id="restartButton" class="restartButton">Reiniciar Jogo</button>
    `;

  principalSection.appendChild(divRestartButtons);

  const restartButton = document.getElementById("restartButton");
  const exitButton = document.getElementById("exitButton");

  restartButton.addEventListener("click", () => {
    showReady();
  });
  exitButton.addEventListener("click", () => {
    showIntro();
  });
}
