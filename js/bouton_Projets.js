document.addEventListener("DOMContentLoaded", function() {
    // 1. On récupère le conteneur spécifique
    var btnContainer = document.getElementById("filter-container-unique");
    
    // Vérification de sécurité pour éviter les erreurs si l'ID n'existe pas sur la page
    if (btnContainer) {
        var btns = btnContainer.getElementsByClassName("custom-filter-item");

        // 2. On boucle sur chaque bouton
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                // 3. On cherche l'élément qui a actuellement la classe 'active'
                var current = btnContainer.querySelector(".active");
                
                // 4. Si un bouton actif existe, on lui retire la classe 'active'
                if (current) {
                    current.classList.remove("active");
                }
                
                // 5. On ajoute la classe 'active' au bouton sur lequel on a cliqué
                this.classList.add("active");
            });
        }
    }
});