import { AnimalTerrestre } from "./AnimalTerrestre";
import { Animal } from "./animal";

export class Perro extends Animal implements AnimalTerrestre{
    private color:string;
    private raza:string;
    cola: string;
    fosasNasales: string;
    

    constructor(name:string,age:number,color:string,raza:string,cola:string,fosasNasales:string){
        super(name,age);
        this.color = color;
        this.raza = raza;
        this.cola = cola;
        this.fosasNasales = fosasNasales;
    }

    ladrar(){
        return "guau re guau"
    }

    respirar(): void {
        console.log("Estoy respirando");
        
    }
}