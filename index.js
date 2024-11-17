const yellowText = `font-weight: bold; color: yellow;`;
const blueText = `font-weight: bold; color: blue;`;
function answer(question, variableName) {
  if (question === undefined) {
    question = ``;
  }
  if (variableName === undefined) {
    variableName = ``;
  }
  console.log(question + `%c${variableName}`, yellowText);
}

console.log("Welcome! Answers are marked in " + `%cyellow`, yellowText);

// 1.
const recipeName = document.querySelector("#recipe-name");
const recipeNameText = recipeName.textContent;
const question1 = "1. What is the name of the recipe? ";
answer(question1, recipeNameText);

// 2.
const recipeNameTag = recipeName.tagName;
const question2 = "2. What HTML tag is used to display the Recipe name? ";
answer(question2, recipeNameTag);

// 3.
const descriptionText = document.querySelector(".description");
const descriptionFontSize = window.getComputedStyle(descriptionText).fontSize;
const question3 =
  "3. What is the font size of the paragraph tag with the class 'description'? ";
answer(question3, descriptionFontSize);

// 4.
const img = document.querySelector("img");
const imgAlt = img.getAttribute("alt");
const question4 = "4. What is the value of the alt atrribute on the image? ";
answer(question4, imgAlt);

// 5.
const imgSrc = img.getAttribute("src");
const newImg = document.createElement("img");

newImg.style.width = img.width;
newImg.style.height = img.height;
newImg.setAttribute("src", imgSrc);
newImg.setAttribute("alt", imgAlt);

const question5 =
  "5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:";
const dimensionsText = `${img.offsetWidth} x ${img.offsetHeight}`;

console.log(question5);
console.log("Url: " + `%c${imgSrc}`, blueText);
console.log("Dimensions: " + `%c${dimensionsText}`, yellowText);
console.log("New image made: ", newImg);

// 6.
const ingredientsListPaste = document.querySelector(".ingredients-list-paste");
const ingredientsCount = ingredientsListPaste.children.length;
const question6 = "6. How many ingredients has the paste? ";
answer(question6, ingredientsCount);

// 7.
const question7 =
  "7. Which is the fourth element in the list containing the ingredients for the paste? ";
const fourthIngredient = ingredientsListPaste.children[3]; 
answer(question7, fourthIngredient.textContent); 

// 8. 
const instructions = [
  "Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen.",
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.",
  "Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner på bunken utan att det rör sig.",
  "Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt.",
  "Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.",
  "Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten.",
  "Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills det blir en slät fluffig smet.",
  "Häll smeten i formen, smula över de resterande digistivetexen om du vill.",
  "Ställ in i frysen över natten.",
  "Servera och toppa med det du känner för."
];

const arrayOfObjects = Array.from(instructions, (instruction, index) => ({
  order: index + 1,
  text: instruction,
}));

const question8 = "8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:";
console.log(question8);
console.log("{\norder: number;\ntext: instruction;\n}");
answer("", "10 objects created:");
console.log(arrayOfObjects);
