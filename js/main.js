
// Declaración de VARIABLES --->>> //

const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const bannerBajo = document.querySelector("#bannerBajo img")
const bannerBajoTitulo = document.querySelector("#bannerBajo h2")
const bannerBajoPie = document.querySelector("#bannerBajo p")
const fragment = document.createDocumentFragment();
<<<<<<< HEAD


// ARRAYS //
=======
//con este addevent SWITCH llamamos a los botones de mostrar o no//
document.addEventListener('click', (ev) => {
    
    if (ev.target == btnMostrar) {
        return pintarFotos();        
    }
    else if (ev.target == btnOcultar) {
        return esconderFotos();
    }
    //con este condicional dentro del eventlistener hacemos que todo sobre lo que se haga click con clase fotico cambia la url de la foto de abajo//
    if (ev.target.classList.contains("fotico")) {
        bannerBajo.src = ev.target.src; 
        bannerBajoTitulo.textContent = "Disfruta de " + ev.target.titulo; 
        bannerBajoPie.textContent = ev.target.pie; 
    } 
    
})
>>>>>>> 5caaf608b805608ebe3ce90f2d24fac868a3b843

const arrayFotos = [{
    id: "foto1",
    url: "assets/viajes-1.jpg",
    alt: "",
    titulo: "Viaje 1",
    pie: "foto 1"
},
{
    id: "foto2",
    url: "assets/viajes-2.jpg",
    alt: "",
    titulo: "Viaje 2",
    pie: "foto 2"
},
{
    id: "foto3",
    url: "assets/viajes-3.jpg",
    alt: "",
    titulo: "Viaje 3",
    pie: "foto 3"
},
{
    id: "foto4",
    url: "assets/viajes-4.jpg",
    alt: "",
    titulo: "Viaje 4",
    pie: "foto 4"
}]


// DELEGACIÓN de EVENTOS --->>> //

//con este addevent SWITCH llamamos a los botones de mostrar o no//
document.addEventListener('click', (ev) => {
    
    switch (ev.target) {
        case btnMostrar: return pintarFotos();
            break;
        case btnOcultar: return esconderFotos();
            break;
    }
    //con este condicional dentro del eventlistener hacemos que todo sobre lo que se haga click con clase fotico cambia la url de la foto de abajo//
    if (ev.target.classList.contains("fotico")) {
        bannerBajo.src = ev.target.src; 
        bannerBajoTitulo.textContent = "Disfruta tu " + ev.target.titulo; 
        bannerBajoPie.textContent = ev.target.pie; 
    } 
    
})


// Declaración de FUNCIONES --->>> //

//Aquí creamos las fotos con los ids, las clases, los títulos//
const pintarFotos = () => {
    arrayFotos.forEach((item) => {
        const cajaFotos = document.createElement("FIGURE");

        const caja = document.createElement("DIV");
        
        //todo lo del pie de foto y demás se modifica en el mismo item//
        const imagen = document.createElement("IMG");
        imagen.id = item.id;
        imagen.src = item.url;
        imagen.titulo = item.titulo;
        imagen.pie = item.pie;
        imagen.classList.add("fotico");
        
        caja.append(imagen);
        
        
        cajaFotos.append(caja);
        

        fragment.append(cajaFotos);
    })
    contenedorFotos.append(fragment);

    btnMostrar.classList.add("ocultar")
    btnOcultar.classList.remove("ocultar")
    bannerBajo.classList.remove("ocultar")
    bannerBajoTitulo.classList.remove("ocultar")
    bannerBajoPie.classList.remove("ocultar")
}

const esconderFotos = () => {
    for (let i = 0; i < arrayFotos.length; i++) {
        contenedorFotos.removeChild(contenedorFotos.children[0]);
    }
    bannerBajo.classList.add("ocultar")
    bannerBajoTitulo.classList.add("ocultar")
    bannerBajoPie.classList.add("ocultar")
    btnOcultar.classList.add("ocultar")
    btnMostrar.classList.remove("ocultar")
}