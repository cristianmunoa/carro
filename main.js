// Variables

const btnMandarina = document.querySelector(".btn-mandarina");

const p = document.createElement("P");

const btnManzana = document.querySelector(".btn-manzana");

const p2 = document.createElement("P");

const btnNaranja = document.querySelector(".btn-naranja");

const p3 = document.createElement("P");

const btnSandia = document.querySelector(".btn-sandia");

const p4 = document.createElement("P");


// Funciones

btnMandarina.addEventListener("click", () => {
    let divAgregar = document.querySelector(".agregar");
    divAgregar.appendChild(p).textContent = "- Mandarina";
    p.style.fontSize = "20px"
    p.style.fontFamily = "monospace"
    p.style.color = "orange"
})

btnManzana.addEventListener("click", () => {
    const divAgregar2 = document.querySelector(".agregar");
    divAgregar2.appendChild(p2).textContent = "- Manzana";
    p2.style.fontSize = "20px"
    p2.style.fontFamily = "monospace"
    p2.style.color = "red"
})

btnNaranja.addEventListener("click", () => {
    const divAgregar3 = document.querySelector(".agregar");
    divAgregar3.appendChild(p3).textContent = "- Naranja";
    p3.style.fontSize = "20px"
    p3.style.fontFamily = "monospace"
    p3.style.color = "#f3741c"
})

btnSandia.addEventListener("click", () => {
    const divAgregar4 = document.querySelector(".agregar");
    divAgregar4.appendChild(p4).textContent = "- Sandia";
    p4.style.fontSize = "20px"
    p4.style.fontFamily = "monospace"
    p4.style.color = "#d80c0c"
})
