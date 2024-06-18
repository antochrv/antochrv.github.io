// scripts.js

// Bouton "Retour en Haut de Page"
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Gestion des sections d'accordéon
document.querySelectorAll('.accordion-toggle').forEach(item => {
    item.addEventListener('click', event => {
        const target = document.querySelector(item.getAttribute('data-target'));
        if (target.classList.contains('open')) {
            target.style.maxHeight = null;
            target.classList.remove("open");
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = null;
                content.classList.remove("open");
            });
            target.style.maxHeight = target.scrollHeight + "px";
            target.classList.add("open");
        }
    });
});

// Fonction pour vérifier si un élément est dans la vue
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Ajoute la classe 'visible' aux éléments visibles
function addVisibleClass() {
    const sections = document.querySelectorAll('.section-animated');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Écouteur de défilement pour ajouter des animations aux sections
window.addEventListener('scroll', addVisibleClass);

// Ajoutez également cette fonction à l'événement de chargement de la page pour activer les animations sur les sections visibles dès le début
window.addEventListener('load', addVisibleClass);
