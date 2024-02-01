console.log("holiwi");

//Agarrar un elemento del html
const contenedor = document.querySelector("#contenedor");
console.log(contenedor);

let saludito = document.querySelector(".saludito");
console.log(saludito.innerText);

const btnApretable = document.getElementById("btnNoApretar")

function apretastes(){
    console.log("Estas apretando el boton");
    contenedor.style.backgroundColor = "grey";
    saludito.innerText = "chauchis";
}

btnApretable.addEventListener('click',() =>{
    if(saludito.style.color === "blue"){
        saludito.style.color = "black"
    }else{
        saludito.style.color = "blue"
    }
})


