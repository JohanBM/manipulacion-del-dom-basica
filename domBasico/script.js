//h1 {color:red}
//.parrafito{...}
//#pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'patito <br> feo';
//Nos ayuda a leer algunos de los atributos del elemento
h1.getAttribute;
//console.log(h1.getAttribute('class'));

//Nos ayuda a modificar los atributos de nuestros elementos
h1.setAttribute;
//h1.setAttribute('class', 'rojo'); donde el primero indica el atributo y el segundo el nuevo valor

//agregar una clase
//classList nos ayuda a manipular los atributos de tipo clase dentro de un elemento
h1.classList.add('rojo');
//eliminar clases
//h1.classList.remove('verde');

//agregar y quitar clases al ejecutar un toggle
//h1.classList.toggle('rojo');

//Nos devuelve true or false dependiendo de si la clase existe o no
//h1.classList.contains('verde')

input.value = "123465";

//Nos ayuda a crear el elemento HTML que nosotros queramos
//document.createElement('img');

//agregar una imagen al HTML
const img =  document.createElement('img');
img.setAttribute('src', 'https://e7.pngegg.com/pngimages/905/688/png-clipart-darth-vader-darth-vader-thumbnail.png');

pid.append(img);