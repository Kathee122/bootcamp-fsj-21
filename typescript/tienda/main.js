"use strict";
// Soy un main de mi tiendita
Object.defineProperty(exports, "__esModule", { value: true });
var catalogo_1 = require("./clases/catalogo");
var arrayProductos = [{
        id: 1,
        nombre: "arroz",
        descripcion: "arroz rico"
    },
    {
        id: 2,
        nombre: "aceite",
        descripcion: "amarillo"
    }];
var catalogo1 = new catalogo_1.Catalogo(arrayProductos, 1);
console.log(catalogo1.menuCatalogo());
