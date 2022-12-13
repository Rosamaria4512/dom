var encabezado = document.querySelector('header');
encabezado.style.display='flex';
encabezado.style.justifyContent='space-around';
encabezado.style.border='3px solid purple';
encabezado.style.background = "pink";
encabezado.style.fontSize = '40px';
encabezado.style.alignItems = 'center';

// console.log(encabezado);

var logo = document.createElement('h1');
encabezado.appendChild(logo);
logo.style.marginRight='8vh';
// logo.innerHTML= 'HOLA GENTE';
var texto = document.createTextNode("Hola gente");
logo.appendChild(texto);



var nombre = document.createElement('p');
encabezado.appendChild(nombre);
var titulo = document.createTextNode("nombre del proyecto");
nombre.appendChild(titulo);


var menu = document.createElement('nav');
encabezado.appendChild(menu);

var menu1 = document.createTextNode("menu de navegacion");
menu.appendChild(menu1);

const button = document.querySelector('#button')
console.log(button)
const input = document.getElementById('input')
const box = document.getElementById('box')

input.style.margin='5px';



button.addEventListener('click',() =>{
    console.log('hiciste click')


});



const button1 = document.querySelector('#button1')
button1.addEventListener('dblclick',() =>{
    console.log('hiciste doble click')

});


// var inicializar = inicializar() =>{
//     var btnRojo;
//     var btnAzul;
//     btnRojo = document.getElementById("btnRojo");
//     btnAzul = document.getElementById("btnAzul");
//     btnRojo.addEventListener("click", btnRojoClic);
//     btnAzul.addEventListener("click", btnAzulclic);
// }