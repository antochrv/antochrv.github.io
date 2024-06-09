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
        if (target.style.display === 'none' || target.style.display === '') {
            target.style.display = 'block';
        } else {
            target.style.display = 'none';
        }
    });
});
