document.addEventListener("DOMContentLoaded", function () {

    const homeTitle = document.querySelector("h1.title");
    const homeIntro = document.querySelector("header p em");

    if (homeTitle && homeIntro && homeTitle.textContent === "Bluehaus") {
        const hour = new Date().getHours();
        let greeting = "Welcome to Bluehaus";

        homeIntro.textContent = `${greeting} — where live music meets visual art`;
    }

    const sections = document.querySelectorAll(".section");

    if (sections.length > 0) {
        const aboutData = {
            story: "Bluehaus was created as a cultural space where jazz music and visual art come together. It was founded to bring artists and audiences closer through intimate experiences.",
            why: "Bluehaus supports creativity, community, and artistic expression by giving space to local and emerging artists in a warm and welcoming environment."
        };

        sections.forEach(section => {
            const heading = section.querySelector("h2");
            const paragraph = section.querySelector("p");

            if (!heading || !paragraph) return;

            if (heading.textContent === "Our Story") {
                paragraph.textContent = aboutData.story;
            }

            if (heading.textContent === "Why Bluehaus") {
                paragraph.textContent = aboutData.why;
            }

            section.addEventListener("click", () => {
                section.classList.toggle("active-section");
            });
        });
    }

    const navLinks = document.querySelectorAll(".nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    const contactForm = document.querySelector("section.contact-card form");

    if (contactForm) {
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (
                nameInput.value.trim() === "" ||
                emailInput.value.trim() === "" ||
                messageInput.value.trim() === ""
            ) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            let messages = localStorage.getItem("bluehausMessages");
            messages = messages ? Number(messages) + 1 : 1;
            localStorage.setItem("bluehausMessages", messages);

            alert("Thank you for contacting Bluehaus! We will get back to you soon.");
            contactForm.reset();
        });
    }

    const reservationForm = document.querySelector(".form");

    if (reservationForm) {
        const nameInput = reservationForm.querySelector('input[type="text"]');
        const emailInput = reservationForm.querySelector('input[type="email"]');
        const sessionInputs = reservationForm.querySelectorAll('input[type="radio"]');

        reservationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let selectedSession = false;
            sessionInputs.forEach(radio => {
                if (radio.checked) selectedSession = true;
            });

            if (
                nameInput.value.trim() === "" ||
                emailInput.value.trim() === "" ||
                !selectedSession
            ) {
                alert("Please complete all reservation fields.");
                return;
            }

            let reservations = localStorage.getItem("bluehausReservations");
            reservations = reservations ? Number(reservations) + 1 : 1;
            localStorage.setItem("bluehausReservations", reservations);

            alert("Reservation successful! We look forward to seeing you at Bluehaus.");
            reservationForm.reset();
        });
    }
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
});

