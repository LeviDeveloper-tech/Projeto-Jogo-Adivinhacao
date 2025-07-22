export function showReady() {
  const principalSection = document.getElementById("principalSection");

  principalSection.innerHTML = `
    <p>Pronto...</p>
    <p>Gerando Número...</p>
    <p>Boa sorte, você tem 10 tentativas!...</p>
    `;
}
