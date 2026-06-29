document.getElementById('custom-toggler').addEventListener('click', function() {
    const nav = document.getElementById('navbarResponsive');
    const toggler = document.getElementById('custom-toggler');
    const mainNav = document.getElementById('mainNav');

    // Alterne l'affichage du menu
    nav.classList.toggle('show');
    
    // Alterne l'icône (Croix / Hamburger)
    toggler.classList.toggle('open');

    // Optionnel : Masque/Affiche le fond de la navbar principale au clic
    if (nav.classList.contains('show')) {
        mainNav.classList.add('open-nav-fix');
    } else {
        mainNav.classList.remove('open-nav-fix');
    }
});

// Fermer le menu si on clique sur un lien
document.querySelectorAll('.js-scroll-trigger').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navbarResponsive').classList.remove('show');
        document.getElementById('custom-toggler').classList.remove('open');
        document.getElementById('mainNav').classList.remove('open-nav-fix');
    });
});