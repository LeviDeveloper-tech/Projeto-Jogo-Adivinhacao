import { showInstructions } from "./showInstructions.js";

export function showIntro() {
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `   
    <button type="button" class="initialButton" id="initialButton">
      Iniciar Jogo
    </button> 
  `;

  const initialButton = document.getElementById("initialButton");

  initialButton.addEventListener("click", () => {
    showInstructions();
  });
}
