import { showGenerator } from "./showGenerator.js";
import { showInstructions } from "./showInstructions.js";

export function showReady() {
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `
    <div id="mensageDivReady" class="mensageDivReady">
    <p>Tudo pronto!</p>
    <p>Aperte <strong>"próximo"</strong> para iniciar!</p>
    </div>
    <div>
     <div class="divButtons" id="divButtons">
      <button type="button" id="buttonBackReady" class="navButtons">Voltar</button>  
      <button type="button" id="buttonNextReady" class="navButtons">Próximo</button>
    </div>
    `;

  const buttonNextReady = document.getElementById("buttonNextReady");
  const buttonBackReady = document.getElementById("buttonBackReady");

  buttonNextReady.addEventListener("click", () => showGenerator());
  buttonBackReady.addEventListener("click", () => showInstructions());
}
