"use strict";

const button = document.getElementById("touchme");
const hidden = document.querySelector(".hidden");

button.addEventListener("click", ()=>{
    hidden.style.display = "flex";
})