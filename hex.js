const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

btn.addEventListener("click", hexCodeGenerator);

function hexCodeGenerator() {
    let hexCode = "#";
    for(let i = 0; i < 6; i++){
        hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    
    color.innerText = hexCode;
    main.style.backgroundColor = hexCode;
    console.log(hexCode);
}