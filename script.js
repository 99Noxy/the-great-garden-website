/* =========================================
   THE GREAT GARDEN
   Main Website JavaScript
========================================= */

"use strict";


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(7, 17, 11, 0.92)";

    } else {

        navbar.style.background =
            "rgba(7, 17, 11, 0.72)";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);


updateNavbar();


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".game-card, .feature, .community-section"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0)";

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});
