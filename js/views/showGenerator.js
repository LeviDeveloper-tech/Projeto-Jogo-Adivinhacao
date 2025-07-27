import { showGame } from "./showGame.js";

export function showGenerator() {
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `
  <div id="mensageDivGenerator" class="mensageDivGenerator">
    <p>Iniciando Game!</p>
    <p>Gerando número</p>
    <p>Boa sorte!</p>

    </div>`;

  setTimeout(() => {
    showGame();
  }, 3000);
}
