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
