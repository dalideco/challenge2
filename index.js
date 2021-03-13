
const myText = document.querySelector("#text");
const [police,couleur,taille ]=document.querySelectorAll(".myflex >*");

setInterval(() => {
    myText.style.color = couleur.value;
    myText.style.fontSize = `${taille.value}px`;
    myText.style.fontFamily = police.value;
}, 1000/30);



//  const framePassed =(callback)=>{
//     setInterval(callback, 1000/30);
//  }

//  function keepTrack(){
//     document.getElementById("text").style.color = document.getElementById("couleur").value;
//     document.getElementById("text").style.fontSize = `${document.getElementById("taille").value}px`;
//     document.getElementById("text").style.fontFamily = document.getElementById("police").value;
//     framePassed(keepTrack);
//  }

//  keepTrack();