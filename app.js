//Ejercicio 1
var encabezado = document.getElementById('encabezado');
encabezado.innerHTML= '<small>Encabezado </small>modificaco mediante <b>JS</b> con la propiedad innerHTML';

var parrafo = document.getElementById('parrafo');
parrafo.innerText = 'Parrafo <b>modificado</b> mediante JS con la propiedad innerText no hacen efecto las etiquetas';

// Ejercicio 2
const eliminar = document.getElementById('eliminar');
eliminar.parentNode.removeChild(eliminar);

const creado = document.createElement('p');
creado.innerText = 'Parrafo creado con JS';
const e2 = document.getElementById('e2');
e2.appendChild(creado);

// Ejercicio 3
const atributo = document.getElementById('atributo');
atributo.setAttribute('href', '#3');

// Ejercicio 4
const lista  = document.getElementById('lista');
const addElement = document.getElementById('addElement');
addElement.addEventListener('click', () =>{
    const item = document.createElement('li');
    item.innerText  = prompt(`Ingrese el elemento a agregar a al lista`);
    lista.append(item);
});

//Ejercicio 5
const enviar = document.getElementById('enviar');
const addComment = document.getElementById('addComment');

enviar.addEventListener('click', () =>{
    const usuario = document.getElementById('usuario');
    const comentario = document.getElementById('comentario');
    const fecha = new Date().toLocaleString();
    const comment = document.createElement('p');
    comment.innerHTML = `${fecha} <br> ${usuario.value}: ${comentario.value} <br>`
    addComment.append(comment);
    usuario.value = '';
    comentario.value = '';
});

//Ejercicio 6
const color = document.getElementById('color');
const cambio = document.getElementById('cambio');
const colores = ["red", "green", "blue", "yellow", "purple"];
var indice = 0;

cambio.addEventListener('click', () => {
    color.style.backgroundColor = colores[indice];
    indice++;
    if (indice == colores.length){
        indice = 0;
    }
});

const cambioTexto = document.getElementById('cambioTexto');
var indiceTexto = 0;

cambioTexto.addEventListener('click', () =>{
    color.style.color = colores[indiceTexto];
    indiceTexto++;
    if (indiceTexto == colores.length){
        indiceTexto = 0;
    }
})

// Ejercicio 7
const alerta = document.getElementById('alerta');
alerta.addEventListener('click', () =>{
    window.alert(`Hiciste click en el boton rojo`);
});

// Ejercicio 8
const listaTareas = document.getElementById('listaTareas');
const agregar = document.getElementById('agregar');
const completa = document.getElementById('completa');
const borrar = document.getElementById('borrar');

agregar.addEventListener('click', () =>{
    const elemento = document.createElement('li');
    elemento.innerText = prompt(`Ingrere tarea a agregar en la lista`);
    elemento.className = 'item'; 
    listaTareas.append(elemento);
});

completa.addEventListener('click', () =>{
    const tareaCompletada = parseInt(prompt(`Escriba el numero de la tarea que completo`));
    listaTareas.childNodes[tareaCompletada].classList.toggle('text-success');
});

borrar.addEventListener('click', () =>{
    const borrarTarea = parseInt(prompt(`Escriba el numero de la tarea que completo`));
    listaTareas.removeChild(listaTareas.childNodes[borrarTarea]);
});

// Ejercicio 9
const imgPrincipal = document.getElementById('imgPrincipal');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

img1.addEventListener('click', () =>{
    imgPrincipal.src = img1.src;
});

img2.addEventListener('click', () =>{
    imgPrincipal.src = img2.src;
});

img3.addEventListener('click', () =>{
    imgPrincipal.src = img3.src;
});

img4.addEventListener('click', () =>{
    imgPrincipal.src = img4.src;
});

// Ejercicio 10
const hora = document.getElementById('hora');

setInterval(() =>{
    hora.textContent = `Hora actual: ${new Date().toLocaleTimeString()}`;
}, 1000);

