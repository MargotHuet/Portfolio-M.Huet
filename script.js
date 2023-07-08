// Détecter le scroll de la page
window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;

    // Vérifier si l'utilisateur fait défiler vers le bas
    if(previusScrollPosition < currentScrollPosition) {
        // Faire apparaitre le menu
        document.getElementById("scrollNav").classList.remove("hidden");
    } else {
        // Faire apparaitre le menu
        document.getElementById("scrollNav").classList.add("hidden");
    }
    // Mettre à jour la position de défilement précédente
    previusScrollPosition = currentScrollPosition;
};
