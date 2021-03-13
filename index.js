
setInterval(() => {
    document.getElementById("text").style.color = document.getElementById("couleur").value;
    document.getElementById("text").style.fontSize = `${document.getElementById("taille").value}px`;
    document.getElementById("text").style.fontFamily = document.getElementById("police").value;
}, 10);