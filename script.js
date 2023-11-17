//cache the DOM
var buton = document.getElementById("button");
var nume = document.getElementById("nume");
var prenume = document.getElementById("prenume");
var img =  document.getElementById("imagine");
var body =  document.getElementById("body");
var  an = document.getElementById("anNastere");

// CONST
const date = new Date();
var year = date.getFullYear();

//Add eventListener
buton.addEventListener("click", altaViata);
an.addEventListener("mouseover", displayAge);

function displayAge()
{
an.innerHTML = year - an.innerHTML;
}

function altaViata()
{
nume.innerHTML = "Functie: Senior Java ";
prenume.innerHTML = "Locul muncii: Tunisia ";
asteptari.innerHTML = "Experiente: Divine ";
img.src = "20231114_071707.jpg";
body.style.backgroundColor = "orange";
img.style.opacity = "0.7";
}