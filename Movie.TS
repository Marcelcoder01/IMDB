import { Professional } from "./IMDB"

let Actor1 = new Professional("Morgan Freeman", 89, 75, 190, false, "American", 4, "Actor")
let Actor2 = new Professional("Leonardo Dicaprio", 39, 70, 183, false, "American", 1, "Actor")

export class Movie {
    title: string;
    releaseYear: number;
    actors: Professional[];
    nacionality: string;
    director: Professional;
    writer: Professional;
    language: string;
    plataforma: string;
    isMCU: boolean;
    MainCharacterName: string;
    producer: string;
    distributor:string;
    genre: string

constructor(title: string, releaseYear: number, nacionality: string, genre: string){
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
}

showDatos(x: Movie){console.log(x)}

}

let Film1 = new Movie("Babilon", 2023, "american", "comedy")
let Film2 = new Movie("El Padrino", 1984, "american", "mafia")

Film1.showDatos(Film1)


