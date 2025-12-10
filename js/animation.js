const buttons = document.querySelectorAll('#animated-buttons span');
let current = 0;

function typeWriter(element, text, link, callback) {
  element.innerHTML = ''; // réinitialise le texte
  element.classList.add('visible');
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML = `<a class="btn btn-secondary btn-lg text-uppercase" href="${link}"><b>${text.slice(0, i + 1)}</b></a>`;
      i++;
      setTimeout(typing, 100); // vitesse d’écriture
    } else {
      setTimeout(() => {
        element.classList.remove('visible');
        callback(); // passe au suivant
      }, 1000); // pause avant le bouton suivant
    }
  }

  typing();
}

function showNextButton() {
  const btn = buttons[current];
  const text = btn.dataset.text;
  const link = btn.dataset.link;

  typeWriter(btn, text, link, () => {
    btn.innerHTML = ''; // nettoie après affichage
    current = (current + 1) % buttons.length; // boucle
    showNextButton();
  });
}

showNextButton();