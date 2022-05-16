"use strict";
const question = document.querySelectorAll(".question");

for (let i = 1; i <= question.length; i++) {
    const arrow = document.querySelector(`.arrow-${i}`);
    arrow.addEventListener("click", () => {
        document.querySelector(`.arrow-${i}`).classList.toggle("animation");
        document.querySelector(`.answer-${i}`).classList.toggle("show");
        document.querySelector(`.question-${i}`).classList.toggle("typo-theme");
        console.log(document.querySelector(`.question-${i}`));
    });
}