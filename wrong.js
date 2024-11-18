// 1. 
const headerP = document.querySelector(".logo-text");
headerP.style.color = `#384241`;

// 2. 
const header = document.querySelector("header");
header.style.justifyContent = `flex-start`;

// 3. 
header.style.borderBottomColor = `lightgray`;

// 4. 
const recipeName = document.querySelector("#recipe-name");
recipeName.innerHTML = "Frozen Cheescake"

// 5. 
const timerIcon = document.querySelector(".description-container span");
timerIcon.classList.add("material-icons");

// 6. 
const timeEstimate = document.querySelector(".time");
timeEstimate.innerHTML = "60+ min";

// 7. 
const img = document.querySelector(".image-container img");
img.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

// 8. 
const ingredientsList = document.querySelector(".ingredients-container");
ingredientsList.style.backgroundColor = `#f9f9f9`;

// 9. 
const ingredientsListBottom = document.querySelector(".ingredients-list-bottom");
const wrong1stIngredient = ingredientsListBottom.firstElementChild;

const firstLi = document.createElement("li");
firstLi.innerHTML = "15st digistivetex";
ingredientsListBottom.replaceChild(firstLi, wrong1stIngredient);
const secondLi = document.createElement("li");
secondLi.innerHTML = "Lite smör";
ingredientsListBottom.appendChild(secondLi);

// 10. 
const pasteIngredients = document.querySelector(".ingredients-list-paste");
pasteIngredients.children[2].innerHTML = "3tsk vaniljsocker";

// 11. 
const lastPasteIngredient = document.createElement("li");
lastPasteIngredient.innerHTML = "400g naturell philadelphiaost";
pasteIngredients.appendChild(lastPasteIngredient);

// 12. 
const instructionTitle = document.querySelector(".instructions");
instructionTitle.classList.remove("shadow");

// 13. 
const instructionsText = document.querySelectorAll(".instructions-list li");
instructionsText[1].innerHTML = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsText[8].innerHTML = "Ställ in i frysen över natten.";