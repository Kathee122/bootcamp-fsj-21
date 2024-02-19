//tipado estricto
//necesitamos el tipo de la variable
//let nombre: string;
//nombre = "5";

//poo oop programacion orientada a objetos - object oriented programmin

//que es el poo
//a traves de un molde(clases), podemos crear cosas(objetos).

//que es una clase?
//Descripcion de caradcteristicas(cualidades) de un objeto

//que compone la clase?
//caracteristicas y metodos(funciones)

//que es un objeto?

//Declaracion de clase
class Person{
    //que caracteristicas tiene una persona
    firstName:string;
    lastName: string;
    age:number;
    alive:boolean;

    constructor(firstName:string, lastName:string, age:number, alive:boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.alive = alive;
    }

  

    //metodos son acciones de una clase
    eat() :string {
        return "Estoy comiendo";
    }

    sleep() :string {
        return "zzzzzz";
    }

}
//creamos un objeto
let person1 = new Person("Katherine","Chacon",22,true);
/*person1.firstName = ;
person1.lastName = ;
person1.age = 22;*/
person1.alive = true;
console.log(person1);
console.log(person1.eat());
console.log(person1.sleep());
let person2 = new Person("steven","Diaz",23,true);
console.log(person2);

//pilares de POO
// son buenas practicas para que nuestro codigo sea mejor, legibilidad, construccion
// y mejorar su escalabilidad

//Encapsulamiento => limitar acceso a  ciertos daro(atributto, metodos) de nuestra clase
//limitadores de acceso
//public => publico es el que viene por defecto, se puede acceder desde cualquier parte de mi codigo
//private => privados, solo de podran acceder desde la misma clase desde dentro
//protected => protegidos, se podran acceder desde la misma clase y las clases hijas
class Vehicle{
    private color:string;
    private weels:number;
    private price:number;

    constructor(color:string, weels:number, price:number){
        this.color = color;
        this.weels = weels;
        this.price = price;
    }

    setcolor(color:string){
        this.color = color;
    }

    getcolor(){
        return this.color;
    }
}

let car1 = new Vehicle("rojo",4,600);
console.log(car1);

car1.setcolor("azul")
console.log(car1);
console.log(car1.getcolor());

//Abstraccion => es la capacidad de crear metodos para interactuar con datos limitados de una clase
//getter y setters
//son los metodos encargados de cambiar o mostrar infromacion encapsulada

//Herencia => capacidad que tiene una clase hija(subclase) de traer atributos y metodos del padre clase

//poliformismo => cambio de forma de un metodo
class Animal{
    //Atributos o caracteristicas
    protected color:string;
    protected raza:string;

    constructor(color:string, raza:string){
        this.color = color;
        this.raza = raza;
    }

    //metodos
    comer():string{
        return "estoy comiendo"
    }

    respirar():string{
        return "soy un animal estoy respirando"
    }

    getcolor():string{
        return this.color;
    }

    getraza():string{
        return this.raza;
    }
}

let pez = new Animal("naranja","pez payaso")

class Perro extends Animal{
    //Atributos de un perro
    private cantPatas:number;
    private cola:string;
    private altura:number;
    private peso:number;

    constructor(color:string,raza:string,cantPatas:number,cola:string,altura:number,peso:number){
        super(color,raza)
        this.cantPatas = cantPatas;
        this.cola = cola;
        this.altura = altura;
        this.peso = peso;
    }

    //Metodos
    ladrar():string{
        return "guau guau"
    }

    caminar():string{
        return "soy un perro y camino"
    }

    comer(): string {
        return `soy un ${this.raza} y estoy comiendo` 

    }
}

let salchicha = new Perro("cafe", "chow chow",4,"corta",30,15)
console.log(salchicha.comer());

/*
Diseña una clase llamada CuentaBancaria que tenga atributos como saldo, titular y numeroCuenta. Implementa métodos públicos para depositar dinero, retirar dinero y obtener el saldo actual de la cuenta. Asegúrate de que solo se puedan modificar el saldo y el titular mediante métodos específicos, protegiendo así la integridad de los datos.
*/
class CuentaBancaria{
    //atributos
    private saldo:number;
    private titular:string;
    private numeroCuenta:string;
    

    constructor(saldo:number,titular:string,numeroCuenta:string){
        this.saldo = saldo;
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
    }

    setsaldo(saldo:number){
        this.saldo = saldo;
    }

    settitular(titular:string){
        this.titular = titular;
    }

    //metodos
    depositarDinero(cantidad1:number):number{
        this.saldo += cantidad1;
        return this.saldo;
    }

    retirarDinero(cant:number){
        //let total = this.saldo -= cant;
        //return "tu saldo actual " + total;
        //this.saldo -= cant;
        //saldo minimo = 0
        //retiro maximo = 750

        if(this.saldo > cant && cant < 750){
            this.saldo -= cant;
        }else{
            console.log("El saldo es insuficiente");
             
        }
        
    }

    getsaldoActual():number{
        return this.saldo;
    }
}

let banco = new CuentaBancaria(300,"Katherine","010-2589-3698")
console.log(banco);
banco.setsaldo(200);
banco.settitular("alexander")
console.log(banco);

banco.depositarDinero(70);
banco.retirarDinero(20);
console.log(banco.getsaldoActual());
