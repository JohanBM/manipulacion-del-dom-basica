const h1 = document.querySelector=('h1');
const form =document.getElementById('formulario')
const input1 = document.getElementById('calculo1'); 
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const resultado = document.getElementById('resolt')

//ejecuta eventos.          Las funciones se deben poner sin parentesis
form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
    //event.preventDefault(); funciona para no recargar la pagina al dar submit
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    resultado.innerText = 'Resultado: ' + sumaInputs;
}