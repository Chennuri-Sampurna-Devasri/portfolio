/* ==========================================
LOADER
========================================== */
window.addEventListener("load", () => {
const loader = document.getElementById("loader");
setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

}, 1000);

});

/* ==========================================
TYPING EFFECT
========================================== */
const typingElement = document.getElementById("typing");

const roles = [
"Aspiring Software Engineer",
"CSE Student",
"Python Learner",
"Web Development Enthusiast",
"Future Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
const currentRole = roles[roleIndex];

if (!isDeleting) {

    typingElement.textContent =
        currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

} else {

    typingElement.textContent =
        currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }
}
setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
);

}
typeEffect();
/* ==========================================
DARK MODE TOGGLE
========================================== */
const themeToggle =
document.querySelector(".theme-toggle");
if (themeToggle) {
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );
    }

});

}

/* ==========================================
LOAD SAVED THEME
========================================== */
if (
localStorage.getItem("theme") === "dark"
) {
document.body.classList.add("dark");

const icon =
    document.querySelector(".theme-toggle i");

if (icon) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

}

/* ==========================================
BACK TO TOP BUTTON
========================================== */
const topBtn =
document.getElementById("topBtn");
window.addEventListener("scroll", () => {
if (window.scrollY > 300) {

    topBtn.style.display = "block";

} else {

    topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

/* ==========================================
SCROLL REVEAL
========================================== */
const revealElements =
document.querySelectorAll(
".section, .skill-card, .journey-card, .certificate-card, .timeline-item"
);

const revealObserver =
new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {
element.classList.add("hidden");
revealObserver.observe(element);

}
);

/* ==========================================
PROGRESS BAR ANIMATION
========================================== */
const progressBars =
document.querySelectorAll(".progress-bar");
const progressObserver =
new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.getAttribute(
                        "data-width"
                    );

                entry.target.style.width =
                    width;
            }

        });

    },

    {
        threshold: 0.5
    }

);

progressBars.forEach((bar) => {
bar.style.width = "0";
progressObserver.observe(bar);

}
);

/* ==========================================
CONTACT FORM VALIDATION
========================================== */
const contactForm =
document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const name =
            document
            .getElementById("name")
            .value
            .trim();

        const email =
            document
            .getElementById("email")
            .value
            .trim();

        const subject =
            document
            .getElementById("subject")
            .value
            .trim();

        const message =
            document
            .getElementById("message")
            .value
            .trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill all fields."
            );

            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(email)
        ) {

            alert(
                "Please enter a valid email."
            );

            return;
        }

        alert(
            "Message submitted successfully!"
        );

        contactForm.reset();

    }
);

}

/* ==========================================
ACTIVE NAVBAR LINK
========================================== */
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {
    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }

    });

}

);

/* ==========================================
HERO FADE IN
========================================== */
window.addEventListener(
"DOMContentLoaded",
() => {
    const hero =
        document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform =
        "translateY(30px)";

    setTimeout(() => {

        hero.style.transition =
            "all 1s ease";

        hero.style.opacity = "1";

        hero.style.transform =
            "translateY(0)";

    }, 300);

}

);

/* ==========================================
CONSOLE MESSAGE
========================================== */
console.log(
"Portfolio Loaded Successfully 🚀"
);
