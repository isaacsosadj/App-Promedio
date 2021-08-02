const btnAgregar = document.querySelector('form button');
const btnBorrar = document.querySelector('#btnBorrar');
const btnCalcular = document.querySelector('#btnCalcular');
const form = document.querySelector("[name='agregarAsignatura']");
const nombreAsignatura = form.asignatura;
const calificacionInput = form.calificacion;
const creditosInput = form.creditos;
const tabla = document.querySelector("#tabla tbody");
let datos = {
    calificacion: 0,
    creditos: 0,
    puntosCalidad: 0,
    sumaPtsCalidad: 0,
    promedio: 0
}

function validar(){
    if(nombre === '' & calificacion === '' & creditos === ''){
        alert('Todos los campos deben estar llenos');
    } else if(nombre === ''){
        alert('El Campo de asignatura debe estar lleno');
    } else if(calificacion === ''){
        alert('El Campo de calificaion debe estar lleno');
    } else if(creditos === ''){
        alert('El Campo de creditos debe estar lleno');
    } else {
        return true;
    }
}

function agregar(){
    tabla.innerHTML += '<tr> <td>' + nombre + ' </td>'
    + '<td>' + calificacion + ' </td>'
    + '<td>' + creditos + ' </td> </tr>';

    datos.creditos += parseInt(creditos);
    datos.puntosCalidad = parseInt(calificacion) * parseInt(creditos);
    datos.sumaPtsCalidad += datos.puntosCalidad;
}

function calcular(){    
    datos.promedio = datos.sumaPtsCalidad / datos.creditos;
    let promedio = datos.promedio.toFixed(1);
    
    document.querySelector('#creditosTotales').textContent = `Creditos totales: ${datos.creditos}`;
    document.querySelector('#promedio').textContent = `Promedio: ${promedio}`;
}

function limpiar(){
    form.asignatura.value = '';
    form.calificacion.value = '';
    form.creditos.value = '';
}

btnAgregar.onclick = (evt) => {
    evt.preventDefault();
 
    nombre = nombreAsignatura.value;
    calificacion = calificacionInput.value;
    creditos = creditosInput.value;

    if(validar() == true){
        agregar();
        limpiar();
    }
}

btnBorrar.onclick = () =>{
    tabla.innerHTML = '';
    datos.creditos = 0;
    datos.puntosCalidad = 0;
    datos.sumaPtsCalidad = 0;
    promedio = 0;
    document.querySelector('#creditosTotales').textContent = `Creditos totales: ${datos.creditos}`;
    document.querySelector('#promedio').textContent = `Promedio: ${promedio}`;
}

btnCalcular.onclick = () =>{
    calcular();
}

// !Opcion 1 Las letras sean identificadas como numeros
// Poner input calificacion que acepte letras y hacer una validacion de que los nummeros sean
// de 0 a 100; y que las letras sea identificadas (por medio de un if) como numeros (4, 3, 2, 1, 0)
// - (A, B, C, D, F) respectivamente

// !Opcion 2 Seleccionar por un input radio si se utilizara base 100 o letras
// un if verificando cual input se selecciono y trabaja en base a el seleccionado

// ?A = 4;
// ?B = 3;
// ?C = 2;
// ?D = 1;
// ?F = 0;