var contenedorImagenes= document.getElementsByClassName("contenedor-pandas");
var tachecitos= document.getElementsByTagName("span");

for( var i= 0;i < tachecitos.length;i++){
  tachecitos[i].addEventListener("click",seleccionarImagen);
}
function seleccionarImagen(){
  borrarImagen(this);
}
function borrarImagen(tachecitos){
  tachecitos.parentNode.style.display="none";
}
// restaurando
var botonRestaurarImagen= document.getElementsByClassName('botoncitos')[2];
botonRestaurarImagen.addEventListener("click",restaurar);

function restaurar(){
for(var i=0;i < tachecitos.length; i++){
  tachecitos[i].parentNode.style.display="flex";
 }
}
// textos
var origen = document.getElementsByClassName('botoncitos')[0];
origen.addEventListener("click",origenMostrar);

function origenMostrar(){
 var texto1= document.getElementById("texto1");
 if(texto1.style.visibility=="hidden"){
   texto1.style.visibility="visible";
 }
 else{
   texto1.style.visibility="hidden";
 };
}

var extincion = document.getElementsByClassName('botoncitos')[1];
extincion.addEventListener("click",extinguiendo);

function extinguiendo(){
  var texto2= document.getElementById("texto2");
  if(texto2.style.visibility=="visible"){
    texto2.style.visibility="hidden";
  }
  else{
    texto2.style.visibility="visible";
  };
 }
