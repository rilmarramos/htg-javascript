'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const error= document.querySelector ('#mensaje-error');
const mensaje = document.querySelector ("#mensaje")

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
  mensaje.innerText = "formulario enviado";
}

function interceptarNombre(event) {
  console.log(event.target.value);
   let nombre = event.target.value ;
   if(nombre.length <=4 || nombre.length >50){

    error.style.display=  "inline";
    error.style.color = "red"

   }  
   else{
     error.style.display = "none"
   }

  }



formulario.addEventListener('submit', recibirNombre);

inputNombre.addEventListener('input', interceptarNombre);

