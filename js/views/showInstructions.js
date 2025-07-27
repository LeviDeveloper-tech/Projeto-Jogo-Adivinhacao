import { showIntro } from "./showIntro.js";
import { showReady } from "./showReady.js";

export function showInstructions() {
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `
    <div id="mensageDiv" class="mensageDiv">
      <h3>Instruções</h3>
      <ol>
        <li>Será gerado um número aleatório de 0 a 100;</li>
        <li>
          <p>A cada palpite, você receberá uma dica:</p>
          <ul>
            <li><strong>"Muito alto"</strong> – se o número for maior do que o correto.</li>
            <li><strong>"Muito baixo"</strong> – se o número for menor do que o correto.</li>
          </ul>
        </li>
        <li>Se acertar, você verá a mensagem <strong>"Parabéns! Você acertou!"</strong>;</li>
        <li>Se esgotar as 10 tentativas, o jogo mostrará o número correto;</li>
        <li>Após o fim do jogo (vitória ou derrota), você poderá clicar em "Reiniciar Jogo" para tentar novamente.</li>
      </ol>
    </div>
    <div class="divButtons" id="divButtons">
      <button type="button" id="buttonBackInstruction" class="navButtons">Voltar</button>  
      <button type="button" id="buttonNextInstruction" class="navButtons">Próximo</button>
    </div>
  `;

  const buttonBackInstruction = document.getElementById(
    "buttonBackInstruction"
  );
  const buttonNextInstruction = document.getElementById(
    "buttonNextInstruction"
  );

  buttonBackInstruction.addEventListener("click", () => {
    showIntro();
  });

  buttonNextInstruction.addEventListener("click", () => {
    showReady();
  });
}
