//while, Dowhile, for

//Mientras la condicion = True -> va a hacer algo
/*
let contador = 0;
while (contador > 0) {
    console.log(contador);
    contador++;
}

//Do while
//Hacer mientras 
do{
    console.log(contador);
    contador++;
    console.log("Estoy dentro del do while"+contador);
}while(contador<10 && contador>=1)*/

//for
//Para 
//for (inicializacion; condicion; incremeto/decremento){codifo a ejecutar}
for(let contador = 0; contador< 10; contador++){
    console.log(contador);
}

//1.Inicializacion
//2. condicion
//3. ejecutar
//4. incremento y decremento


//1.condicion
//2.ejecutar
//3. incremento7decremento


for(let contador = 0; contador <= 10; contador++){
    console.log("Estoy dentro del for y valor del contador es: "+contador); 
}

//Realiza un bucle for el cual me imprima un contador desde el numero 6 hasta l 16
for(let contador = 6; contador <= 16; contador++){
    console.log(contador);
}

//realiza un bucle for el cual me imprima loa numeros pares del cero hasta el 50
//y me imprima los numeros impares reemplazados por la palabra impar
for(let contador = 0; contador<=50; contador++){
    if(contador % 2 === 0){
    console.log(contador)
    }else {
        console.log("impar")
    }
}

//Estructur de datos = Array
//Declaraciones de array
let Array1 = new Array();
let array2 =[];
console.log(array2);
/* ejemplo
array2.push(1);
array2.push(2);
console.log(array2);
console.log(array2[0]);

let array3 = [123,1434,76,567,512,76];
console.log(array3[4]);*/

//Metodos array basicos
//Ingresar datos en un array
array2.push(1);
console.log(array2);

//Quitar el ultimo dato de un array
array2.pop();
console.log(array2);

array2.push(1)
//agregar datos al principio del array
array2.unshift(2)
console.log(array2);

//quitar datos del principio del array
array2.shift();
console.log(array2);

let longanismo = array2.length;
console.log(longanismo);

let array3 = [15,13,12,9,22,95,48];
for(let contador = array3.length -1; contador >=0; contador--){
    console.log(array3[contador]);
}
//otra solucion
array3.reverse();
for(let contador = 0; contador<array3.length;contador++){
    console.log(array3[contador])
}

let contador = 0;
while(contador<array3.length){
    console.log(array3[contador]);
    contador++;
}

function sumaElementosPares(array) {
  let suma = 0;
  for (let numero of array) {
    if (numero % 2 === 0) {
      suma += numero;
    }
  }
  return suma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const respuesta = sumaElementosPares(numeros);
console.log(respuesta);

function filtrarNumeros(array, limite){
    const filtrar = []; 
}

function encontrarElementoMaximo(array) {
    return Math.max(...array);
  }
 
  // Ejemplo de uso:
  const miArray = [10, 5, 8, 15, 3, 20];
  const maximo = encontrarElementoMaximo(miArray);
  
  console.log("Elemento máximo:", maximo);

 
//otro metodo

  function encontrarElementoMaximo(array) {
    if (array.length === 0) {
      return undefined; 
    }
    let maximo = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i];
      }
    }
    return maximo;
  }
  
  // Ejemplo de uso:
  const Array = [10, 5, 8, 15, 3, 20];
  const max = encontrarElementoMaximo(Array);
  
  console.log("Elemento máximo:", max);

  //ejercicio 4
  function multiplicarNumero(array, multiplicador) {
    const nuevoArray = [];
  
    for (let numero = 0; numero < array.length; numero++) {
      nuevoArray.push(array[numero] * multiplicador);
    }
  
    return nuevoArray;
  }

  const array = [1, 0, 3, 4, 5];
  const multiplicador = -1;
  const nuevoArray = multiplicarNumero(array, multiplicador);
  
  console.log("Nuevo array multiplicado:", nuevoArray);

  