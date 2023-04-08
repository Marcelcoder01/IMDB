export class Professional{
    name: string;
    age: number; 
    weight: number;
    height: number;
    isRetired: boolean;
    nationality: string;
    oscarNumber: number;
    profession: string;
 
    constructor( name:string, age: number, weight: number, height: number,
         isRetired:boolean, nationality:string, oscarNumber:number, profession: string){

        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;

         }
    mostrarDatos(x: Professional){
        console.log(x)}

}

// let NuevoActor = new Professional("Brad Pitt", 59, 73, 180, false, "American", 2, "Actor")

// NuevoActor.mostrarDatos(NuevoActor)