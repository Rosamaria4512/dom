var header1 = document.querySelector("header");
header1.innerHTML = "Pijamas Mariangel";
header1.style.color = "purple";
header1.style.background = "pink";
header1.style.border='3px solid purple';
header1.style.width ='100%'
header1.style.padding ='8vh'
header1.style.textAlign = 'center';
header1.style.fontSize = '100px';
header1.style.listStyle ='none';


var contenedor2 = document.querySelector("main");
var nav = document.createElement("nav");
contenedor2.appendChild(nav);



var ul =document.createElement('ul');
nav.appendChild(ul);
ul.style.display='flex';
ul.style.listStyle='none';
ul.style.color='purple';
ul.style.fontSize = '20px';

var li1 =document.createElement('li');
ul.appendChild(li1);
li1.style.marginRight='8vh';
var li2 =document.createElement('li');
ul.appendChild(li2);
li2.style.marginRight='8vh';
var li3 =document.createElement('li');
ul.appendChild(li3);
li3.style.marginRight='8vh';
var li4 =document.createElement('li');
ul.appendChild(li4);


 li1.innerHTML='pijamas enterizas';
 li2.innerHTML='pijamas termicas';
 li3.innerHTML='babuchas';
 li4.innerHTML='Pijamas piel de durazno';



var contenedor3 = document.querySelector('main')
var articulo = document.createElement('article')
contenedor3.appendChild(articulo); 
articulo.style.display='flex';





 var img= document.createElement('img');
 articulo.appendChild(img);
 var img1 =document.createElement('img');
 articulo.appendChild(img1);
 var img2 =document.createElement('img');
 articulo.appendChild(img2);
 var img3 =document.createElement('img');
 articulo.appendChild(img3);


img.src=("img/babu.jpeg"); 
img.style.width= '50vh'
img.style.marginRight='2vh';
img.style.border='3px solid purple ';


img1.src=("img/babuuuu.jpeg");
img1.style.width= '50vh';
img1.style.marginRight='2vh';
img1.style.border='3px solid pink ';

img2.src=("img/stich.jpeg");
img2.style.width='50vh';
img2.style.marginRight='2vh';
img2.style.border='3px solid purple ';

img3.src=("img/uni.jpg");
img3.style.width= '50vh';
img3.style.marginRight='2vh';
img3.style.border='3px solid pink ';


var contenedor4= document.querySelector('footer');
var articulo2 = document.createElement('article');
contenedor4.style.background='aqua';
contenedor4.style.padding ='15vh'
contenedor4.style.width='90%';
contenedor4.style.border='3px solid pink ';
contenedor4.style.margin='5px'

contenedor4.appendChild(articulo2); 
 var texto = document.createTextNode('🥳🥳Disponibilidad pijamas enterizas termicas adultos y niños 👦 tallas  2,4 6,8,10,12,14,16 y adultos s,m,L,Niños 18500🥳 Adultos 💰21000👆algunos OJO algunos muñecos cambian el precio ☝️');
 var texto2 = document.createTextNode('contactanos: Celular: 444444');
 contenedor4.appendChild(texto);
 contenedor4.appendChild(texto2);












 






// var final = document.querySelector("footer");
// var h2 = document.createElement("h2");
//  final.appendChild(h2);

//  var texto = document.createTextNode('Rosa maria');
//  h2.appendChild(texto);


