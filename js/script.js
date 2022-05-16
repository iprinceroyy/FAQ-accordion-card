"use strict";
const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");

//console.log(question.length);
for (let i = 1; i <= question.length; i++) {
    const ans = document.querySelector(`.question-${i}`);
    document
        .querySelector(`.arrow-${i}`)
        .addEventListener("click", function() {
            document.querySelector(`.answer-${i}`).classList.toggle("show");
            //this.classList.toggle(".animation");
            console.log(this.classList);
        });
}