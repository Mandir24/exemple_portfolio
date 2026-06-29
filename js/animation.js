document.addEventListener("DOMContentLoaded", function() {
    const rotator = document.getElementById('word-rotator');
    const words = rotator.getElementsByClassName('skill-badge');
    const stepHeight = 40; // Doit être identique à la hauteur CSS
    let currentIndex = 0;

    // Pour un effet de boucle infinie fluide, on clone le premier mot à la fin
    const firstClone = words[0].cloneNode(true);
    rotator.appendChild(firstClone);

    function slideNext() {
        currentIndex++;
        rotator.style.transition = "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)";
        rotator.style.transform = `translateY(-${currentIndex * stepHeight}px)`;

        // Si on arrive au clone (fin), on réinitialise sans animation
        if (currentIndex === words.length - 1) {
            setTimeout(() => {
                rotator.style.transition = "none";
                rotator.style.transform = "translateY(0)";
                currentIndex = 0;
            }, 600); // Temps de l'animation
        }
    }

    setInterval(slideNext, 2500); // Change de mot toutes les 2.5 secondes
});