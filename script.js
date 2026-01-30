// Confirmação de envio do formulário de contacto
function enviarForm(event) {
  const form = event.target;

  if (!form.checkValidity()) {
    return;
  }

  event.preventDefault();

  const nomeInput = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem-confirmacao");
  const nomeUtilizador = nomeInput.value;

   mensagem.innerHTML = `
    <strong>Olá, ${nomeUtilizador}!</strong><br>
    Mensagem [não] enviada com sucesso!<br>
    Contacte-me por um dos meios abaixo! 😊
  `;

  mensagem.style.display = "block";
  mensagem.style.color = "green";
  mensagem.style.marginTop = "30px";
  mensagem.style.textAlign = "center";
  mensagem.style.width = "100%";
}


/* Menu hamburger */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');

  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
});


/* Dark Theme */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  if(document.body.classList.contains("dark-theme")){
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
