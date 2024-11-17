// 1. 
const recipeName = document.querySelector("#recipe-name");
console.log("1. What is the name of the recipe? " + recipeName.getHTML());

// 2. 
const recipeNameTag = recipeName.tagName;
console.log("2. What HTML tag is used to display the Recipe name? " + recipeNameTag);

// 3. 
const descriptionText = document.querySelector(".description");
const descriptionFontSize = window.getComputedStyle(descriptionText).fontSize;
console.log("3. What is the font size of the paragraph tag with the class 'description'? " + descriptionFontSize);

// 4. 
const img = document.querySelector("img");
const imgAlt = img.getAttribute("alt");
console.log("4. What is the value of the alt atrribute on the image? " + imgAlt); 

// 5. 
const imgSrc = img.getAttribute("src");
const newImg = document.createElement("img");

const computedStyles = window.getComputedStyle(img);
newImg.style.width = computedStyles.width;
newImg.style.height = computedStyles.height;
newImg.setAttribute("src", imgSrc);
newImg.setAttribute("alt", imgAlt);

console.log("5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:"
    + "\n url: " + img.getAttribute("src") 
    + "\n dimensions: " + img.offsetHeight + " x " + img.offsetWidth
    + "\n New image made:\n", newImg
);

