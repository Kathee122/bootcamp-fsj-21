//comentarios = partes de codigo que no se ejecutan
//comentario de una sola linea 

/* esto es un 
    comentario
        multilineas*/

//---- tipo de datos -----
/*
numerico = number
Texto = string
Caracter = string
Boleanos = Boolean 
*/

//---- Variables -----
// Variable = Un lugar o espacio en el cual podemos guardar algo
// ESE DATO TIENE QUE SER ALGO QUE CAMBIE

//---- tipo de variables -----
// Let y var
//palabra reservada + nombre de la variable + asignacion + valor a guada
var nombre = "Katherine"

//---- sintaxis tipos de datos ---
var numerico = 30
var boleanoverdadero = true
var boleanofalso = false
var caracter = "a"
var texto = 'holiwi soy un texto'

//---- tipo de variables -----
// Let y var
// var = palabra reservada para declarar variables
// let = es la segunda palabra reservada y la mas usada
//var permite redeclarar y let  no

let edad = "25"
console.log("holi como andis")
console.log(edad)
edad = "26"
console.log(edad)

// --- operadores matematicos ---
let suma = 5 + 5
let resta = 6 - 3
let division = 138 / 2
let multiplicacion = 28 * 2
let residuo = 10 % 2

// --- operadores logicos ---
// ESTOS DAN COMO RESULTADO UN BOOLEANO
let igualdad = 10 == 10
console.log(igualdad)
let igualdadEstricta = 10 === "10"
console.log(igualdadEstricta)
let desigualdad = 10 != 10
console.log(desigualdad)
let desigualdadEstricta = 10 !== "10"
console.log(desigualdadEstricta);

// y = &&
// siempre va a esperar que ambas cosas sean true
let y = 10 == 10 && 10 === "10"
console.log(y)
// 0 = ||
//o siempre va a esperar que 1 de las sea true
let o = 10 == 10 && 10 === "10"
console.log(0)

//--- Funciones ----
// Tipos de funciones : Funcion que devuelve un valor y funcion que no devuelve nada
//una funcion es una porcion de codigo que hace algo

// declaracion de funcion
function miFuncionQueDevuelve(params) {
    return "soy un funcion que devuelve"
}

function miFuncionvacia(params) {
    console.log("soy una funcion tipo void")
}

let resultadoFuncion1 = miFuncionQueDevuelve();
let resultadoFuncion2 = miFuncionvacia();

console.log(resultadoFuncion1+" y devuelvo un string");
console.log(resultadoFuncion2+" y no devuelvo nada");

//ejemplo de funcion que si devuelve
function sumarDosNumeros(params) {
    //console.log(5+5);
    return 5+5;
}

function saludarusuario(params) {
    console.log("Hola usuario")
}

let resultadosuma = sumarDosNumeros();
let veinte = resultadosuma+10;
console.log(veinte);
saludarusuario();

//PARAMETROS Valor que recibe la funcion para trabajar
//Este valor viene de afuera de la funcion

function sumaDosNumerosParam(num1,num2) {
    console.log(num1+num2);
    return num1+num2
}

let result = sumaDosNumerosParam(10,20);
let result2 = sumaDosNumerosParam(153,431);

function saludarUsuarioParam(nombre){
    console.log("hola"+nombre)
}
saludarUsuarioParam("Jairo")
saludarUsuarioParam("Steven")

//funciones anonimas
//son funciones sin nombre

let miFuncioncita = function(){
    console.log("Hola")
}
miFuncioncita();

let miFechecita = () => {
    console.log("Hola")
}

function funcionoConCallback(funcion) {
    funcion();
}

//callback es una funcion que se pasa como parametro a otra
funcionoConCallback( () =>{console.log("soy un callback");});


////--- Condicionales ----
//IF (CONDICION) { CODIGO A EJECUTAR}
let nombreAlumno = "katherine"
let nombreAlumnoMinus = nombreAlumno.tolowerCase();

if (nombreAlumnoMinus == "Katherine") {
    console.log("Hola Katherine")
} else{
    console.log("Hola, ya se que no se quien sos");
}

if(nombreAlumnoMinus === "katherine"){
    console.log("Hola Katherine")
} else if(nombreAlumnoMinus === "jose"){
    console.log("Hola Jose")
} else{
    console.log("Hola, ya se que no se quien sos, pero holi");
}

// condicional ternario
// condicon caso true : caso false;
nombreAlumnoMinus === "jairo" ? console.log("Hola Jairo") : console.log("hola quien sea");

//switch
switch (nombreAlumnoMinus) {
    case katherine:
        console.log("hola kath")
        break;

    default: console.log("hola otro nombre");
        
}

let opcion = 1;
switch(opcion){
    case 1: console.log("Te estas comunicando con Josue")
    break;
    case 2: console.log("Te estas comuicando con Jose");
    break;
    case 3: console.log("Te estas comuicando con Marvin");
}


function calculadora(num1 , num2, operador){
    switch (operador) {
        case '+':
          return num1 + num2;

        case '-':
          return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
        
        }     
}

console.log(calculadora(5, 8, "+"))

//Crea una funcion que dado un numero me imprima si esta es para o impar

function parImpar(numero){
    if(numero % 2 === 0){
        console.log("el numero es par");
    }else{
        console.log("el numero es impar");
    }
}
parImpar(3);


/*Escribe una función llamada calificacionEstudiante que tome 3 notas 
como parametro y devuelva "Aprobado" si el promedio es mayor a 7, caso contrario devolver "Desaprobado".*/

function calificacionEstudiante(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 7) {
      return "Aprobado";
    } else {
      return "Desaprobado";
    }
  }

  console.log(calificacionEstudiante(8, 7, 9));