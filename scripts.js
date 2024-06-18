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
        if (target.style.maxHeight) {
            target.style.maxHeight = null;
            target.classList.remove("open");
        } else {
            target.style.maxHeight = target.scrollHeight + "px";
            target.classList.add("open");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-toggle');
    accordions.forEach((accordion) => {
        accordion.addEventListener('click', function () {
            const content = document.querySelector(this.dataset.target);
            content.classList.toggle('open');
        });
    });
});
