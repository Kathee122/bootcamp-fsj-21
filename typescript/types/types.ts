//Types -> Tipos de datos

//Tipos de datos primitivos
//string, number, boolean, null

//types son tipos de datos personalizados
//creados en base de la necesidad

//Agregar pseudonimos(Apodo)
type CadenaTexto = string;

let textito:CadenaTexto = "soy un tipo nuevo"

type arrayNumeros = number[];
let nuevoArray:arrayNumeros = [123,456,4,12]

//declarar moldes para objetos
//A traves de objetos literales

let objetoLiteral = {}

type Perro = {
    name:string;
    age:number;
    cola:string | null
}

