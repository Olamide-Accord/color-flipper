const colors = ["green", "red", "rgba(133,122,200)", "#f15025",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

btn.addEventListener("click", colorCodeGenerator);

function colorCodeGenerator() {
    let colorCode = colors[Math.floor(Math.random() * colors.length)];
    main.style.backgroundColor = colorCode;
    color.textContent = colorCode;
}
