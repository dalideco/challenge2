// selecting elements from dom
const [color,size,font]=document.querySelectorAll("div > *");
const myText = document.querySelector(".title");


// adding the event listeners
color.addEventListener("change",()=>{
    myText.style.color = color.value;
})
font.addEventListener("change",()=>{
    myText.style.fontFamily = font.value;
})

size.addEventListener("change",()=>{
    const adding  = parseInt(size.value);
    const myFontSize = 1.5 + adding/10; 
    myText.style.fontSize = `${myFontSize}rem`
})