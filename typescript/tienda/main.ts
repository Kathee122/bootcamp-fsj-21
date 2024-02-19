// Soy un main de mi tiendita

import { Catalogo } from "./clases/catalogo";
let arrayProductos = [{
    id:1,
    nombre:"arroz",
    descripcion:"arroz rico"
},
{
    id:2,
    nombre:"aceite",
    descripcion:"amarillo"

}]

let catalogo1 = new Catalogo(arrayProductos,1)
console.log(catalogo1.menuCatalogo());

