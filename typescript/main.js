//tipado estricto
//necesitamos el tipo de la variable
//let nombre: string;
//nombre = "5";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//poo oop programacion orientada a objetos - object oriented programmin
//que es el poo
//a traves de un molde(clases), podemos crear cosas(objetos).
//que es una clase?
//Descripcion de caradcteristicas(cualidades) de un objeto
//que compone la clase?
//caracteristicas y metodos(funciones)
//que es un objeto?
//Declaracion de clase
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, alive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.alive = alive;
    }
    //metodos son acciones de una clase
    Person.prototype.eat = function () {
        return "Estoy comiendo";
    };
    Person.prototype.sleep = function () {
        return "zzzzzz";
    };
    return Person;
}());
//creamos un objeto
var person1 = new Person("Katherine", "Chacon", 22, true);
/*person1.firstName = ;
person1.lastName = ;
person1.age = 22;*/
person1.alive = true;
console.log(person1);
console.log(person1.eat());
console.log(person1.sleep());
var person2 = new Person("steven", "Diaz", 23, true);
console.log(person2);
//pilares de POO
// son buenas practicas para que nuestro codigo sea mejor, legibilidad, construccion
// y mejorar su escalabilidad
//Encapsulamiento => limitar acceso a  ciertos daro(atributto, metodos) de nuestra clase
//limitadores de acceso
//public => publico es el que viene por defecto, se puede acceder desde cualquier parte de mi codigo
//private => privados, solo de podran acceder desde la misma clase desde dentro
//protected => protegidos, se podran acceder desde la misma clase y las clases hijas
var Vehicle = /** @class */ (function () {
    function Vehicle(color, weels, price) {
        this.color = color;
        this.weels = weels;
        this.price = price;
    }
    Vehicle.prototype.setcolor = function (color) {
        this.color = color;
    };
    Vehicle.prototype.getcolor = function () {
        return this.color;
    };
    return Vehicle;
}());
var car1 = new Vehicle("rojo", 4, 600);
console.log(car1);
car1.setcolor("azul");
console.log(car1);
console.log(car1.getcolor());
//Abstraccion => es la capacidad de crear metodos para interactuar con datos limitados de una clase
//getter y setters
//son los metodos encargados de cambiar o mostrar infromacion encapsulada
//Herencia => capacidad que tiene una clase hija(subclase) de traer atributos y metodos del padre clase
//poliformismo => cambio de forma de un metodo
var Animal = /** @class */ (function () {
    function Animal(color, raza) {
        this.color = color;
        this.raza = raza;
    }
    //metodos
    Animal.prototype.comer = function () {
        return "estoy comiendo";
    };
    Animal.prototype.respirar = function () {
        return "soy un animal estoy respirando";
    };
    Animal.prototype.getcolor = function () {
        return this.color;
    };
    Animal.prototype.getraza = function () {
        return this.raza;
    };
    return Animal;
}());
var pez = new Animal("naranja", "pez payaso");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(color, raza, cantPatas, cola, altura, peso) {
        var _this = _super.call(this, color, raza) || this;
        _this.cantPatas = cantPatas;
        _this.cola = cola;
        _this.altura = altura;
        _this.peso = peso;
        return _this;
    }
    //Metodos
    Perro.prototype.ladrar = function () {
        return "guau guau";
    };
    Perro.prototype.caminar = function () {
        return "soy un perro y camino";
    };
    Perro.prototype.comer = function () {
        return "soy un ".concat(this.raza, " y estoy comiendo");
    };
    return Perro;
}(Animal));
var salchicha = new Perro("cafe", "chow chow", 4, "corta", 30, 15);
console.log(salchicha.comer());
/*
Diseña una clase llamada CuentaBancaria que tenga atributos como saldo, titular y numeroCuenta. Implementa métodos públicos para depositar dinero, retirar dinero y obtener el saldo actual de la cuenta. Asegúrate de que solo se puedan modificar el saldo y el titular mediante métodos específicos, protegiendo así la integridad de los datos.
*/
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldo, titular, numeroCuenta) {
        this.saldo = saldo;
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
    }
    CuentaBancaria.prototype.setsaldo = function (saldo) {
        this.saldo = saldo;
    };
    CuentaBancaria.prototype.settitular = function (titular) {
        this.titular = titular;
    };
    //metodos
    CuentaBancaria.prototype.depositarDinero = function (cantidad1) {
        this.saldo += cantidad1;
        return this.saldo;
    };
    CuentaBancaria.prototype.retirarDinero = function (cant) {
        //let total = this.saldo -= cant;
        //return "tu saldo actual " + total;
        //this.saldo -= cant;
        //saldo minimo = 0
        //retiro maximo = 750
        if (this.saldo > cant && cant < 750) {
            this.saldo -= cant;
        }
        else {
            console.log("El saldo es insuficiente");
        }
    };
    CuentaBancaria.prototype.getsaldoActual = function () {
        return this.saldo;
    };
    return CuentaBancaria;
}());
var banco = new CuentaBancaria(300, "Katherine", "010-2589-3698");
console.log(banco);
banco.setsaldo(200);
banco.settitular("alexander");
console.log(banco);
banco.depositarDinero(70);
banco.retirarDinero(20);
console.log(banco.getsaldoActual());
