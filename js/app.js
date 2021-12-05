const asignatura = document.getElementById("asignatura");
const calificacion = document.getElementById("calificacion");
const creditos = document.getElementById("creditos");
const tabla = document.querySelector("#tabla tbody");
const agregar = document.querySelector("#agregar");

agregar.addEventListener("click", (e) => {
    const nuevaAsignatura = asignatura.value;
    const nuevaCalificacion = calificacion.value;
    const nuevosCreditos = creditos.value;
    if (nuevaAsignatura === "" || nuevaCalificacion === "" || nuevosCreditos === "") {
        alerta("Por favor, llene todos los campos", false);
        return;
    }
    const nuevaFila =
        '<tr> <td class="text-start">' +
        nuevaAsignatura +
        " </td>" +
        '<td class="text-center">' +
        nuevaCalificacion +
        " </td>" +
        '<td class="text-center">' +
        nuevosCreditos +
        " </td> </tr>";
    alerta("Asignatura agregada", true);
    tabla.innerHTML += nuevaFila;
    asignatura.value = "";
    calificacion.value = "";
    creditos.value = "";
});

const alerta = (ale, flag) => {
    const alert = document.createElement("div");
    flag ? (alert.classList = "correcto") : (alert.classList = "error");
    alert.innerText = ale;
    const previo = document.querySelector(".correcto");
    const previo2 = document.querySelector(".error");
    if (previo || previo2) {
        previo ? previo.remove() : previo2.remove();
    }
    document.querySelector(".ingresar-asignatura").appendChild(alert);
    alert.style.animation = 'fadeIn 1s alternate';
    setTimeout(() => {
        alert.remove();
    }, 3000);
}