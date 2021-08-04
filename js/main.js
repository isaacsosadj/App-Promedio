const btnAgregar = document.querySelector("#btnAgregar");
const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.querySelector("#btnCalcular");
const form = document.querySelector("[name='agregarAsignatura']");
const nombreAsignatura = form.asignatura;
let calificacionInput = form.calificacionNumero; // !por defecto
const creditosInput = form.creditos;
const tabla = document.querySelector("#tabla tbody");
console.log(tabla);
let datos = {
    calificacion: 0,
    creditos: 0,
    puntosCalidad: 0,
    sumaPtsCalidad: 0,
    promedio: 0,
};

// !Opcion 1 Las letras sean identificadas como numeros
// Poner input calificacion que acepte letras y hacer una validacion de que los nummeros sean
// de 0 a 100; y que las letras sea identificadas (por medio de un if) como numeros (4, 3, 2, 1, 0)
// - (A, B, C, D, F) respectivamente

document.querySelector("#calificacionLetras").style.display = "none";
document.querySelector("#calificacionNumero").style.display = "inline";
const calificacionTipo = form.querySelectorAll('[name="calificacionTipo"]');
var tipo;

function seleccionarTipoCalificacion() {
    for (let i = 0; i < calificacionTipo.length; i++) {
        if (calificacionTipo[i].checked) {
            tipo = calificacionTipo[i].value;
        }
    }
    if (tipo === "base100") {
        document.querySelector("#calificacionLetras").style.display = "none";
        document.querySelector("#calificacionNumero").style.display = "inline";
        // console.log(tipo)
    } else {
        document.querySelector("#calificacionNumero").style.display = "none";
        document.querySelector("#calificacionLetras").style.display = "inline";
        // console.log(tipo)
    }
}

function validar() {
    if ((nombre === "") & (calificacion === "") & (creditos === "")) {
        console.log("******Todos los campos deben estar llenos******");
    } else if (nombre === "") {
        console.log("******El Campo de asignatura debe estar lleno******");
    } else if (calificacion === "") {
        console.log("******El Campo de calificaion debe estar lleno******");
    } else if (creditos === "") {
        console.log("******El Campo de creditos debe estar lleno******");
    } else {
        return true;
    }
}

function agregar() {
    let calificacionMostrar;

    if (tipo === "base100") {
        calificacionInput = document.querySelector("#calificacionNumero");
        calificacionMostrar = calificacion;
    } else {
        calificacionInput = document.querySelector("#calificacionLetras");
        if (calificacion == 4) {
            calificacionMostrar = "A";
        } else if (calificacion == 3) {
            calificacionMostrar = "B";
        } else if (calificacion == 2) {
            calificacionMostrar = "C";
        } else if (calificacion == 1) {
            calificacionMostrar = "D";
        } else if (calificacion == 0) {
            calificacionMostrar = "F";
        }
    }
    console.log(calificacion);

    tabla.innerHTML +=
        '<tr> <td class="text-start">' +
        nombre +
        " </td>" +
        '<td class="text-center">' +
        calificacionMostrar +
        " </td>" +
        '<td class="text-center">' +
        creditos +
        " </td> </tr>";
    datos.creditos += parseInt(creditos);
    datos.puntosCalidad = parseInt(calificacion) * parseInt(creditos);
    datos.sumaPtsCalidad += datos.puntosCalidad;
}

function calcular() {
    datos.promedio = datos.sumaPtsCalidad / datos.creditos;
    let promedio = datos.promedio.toFixed(1);
<<<<<<< HEAD

    if (isNaN(promedio)) {
        promedio = 0;
    }

    document.querySelector(
        "#creditosTotales"
    ).textContent = `Creditos totales: ${datos.creditos}`;
    document.querySelector("#promedio").textContent = `Promedio: ${promedio}`;
=======
    
    if(isNaN(promedio)){
        promedio = 0;
    }
    
    document.querySelector('#creditosTotales').textContent = `Creditos totales: ${datos.creditos}`;
    document.querySelector('#promedio').textContent = `Promedio: ${promedio}`;
>>>>>>> 6d573d77b4b7e244f788e2fa41a2311ae56d3959
}

function limpiar() {
    form.asignatura.value = "";
    document.querySelector("#calificacionNumero").value = "";
    document.querySelector("#calificacionLetras").value = 4;
    calificacion = "";
    form.creditos.value = "";
}

btnAgregar.onclick = (evt) => {
    evt.preventDefault();
    for (let i = 0; i < calificacionTipo.length; i++) {
        if (calificacionTipo[i].checked) {
            tipo = calificacionTipo[i].value;
        }
    }
    if (tipo === "base100") {
        calificacionInput = document.querySelector("#calificacionNumero");
    } else {
        calificacionInput = document.querySelector("#calificacionLetras");
    }

    nombre = nombreAsignatura.value.trim();
    calificacion = calificacionInput.value;
    creditos = creditosInput.value;

    if (validar() == true) {
        agregar();
        limpiar();
    }
};

btnBorrar.onclick = () => {
    if (confirm("¿Seguro que quieres borrar las materias?") == true) {
        tabla.innerHTML = "";
        datos.creditos = 0;
        datos.puntosCalidad = 0;
        datos.sumaPtsCalidad = 0;
        promedio = 0;
        document.querySelector(
            "#creditosTotales"
        ).textContent = `Creditos totales: ${datos.creditos}`;
        document.querySelector("#promedio").textContent = `Promedio: ${promedio}`;
    } else {
        return false;
    }
};

btnCalcular.onclick = () => {
    calcular();
};

// document.onkeydown = function(e){
//     tecla = (document.all) ? e.keyCode : e.which;
//     if (tecla == 116){
//       if (confirm("¿Seguro que quieres refrescar la página?") == true) {
//          return true;
//        } else {
//          return false;
//       }
//     }
// }

window.onbeforeunload = function (evt) {
    return "¿Desea recargar la página web?";
};