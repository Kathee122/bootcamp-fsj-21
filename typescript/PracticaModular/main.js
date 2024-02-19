"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Este va a ser nuestro main
var animal_1 = require("./clases/animal");
var animal_2 = require("./clases/animal");
var perro_1 = require("./clases/perro");
console.log(animal_1.animalito);
var animalLindo = new animal_2.Animal("oso", 3);
console.log(animalLindo);
var boby = new perro_1.Perro("Bobby", 10, "marron", "chow chow");
console.log(boby);
