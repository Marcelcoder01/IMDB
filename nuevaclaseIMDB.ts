import { Movie } from "./Movie"

export class Imdb{
    peliculas: Movie[];

    constructor(peliculas: Movie[]){
        
        this.peliculas = peliculas 
    }

}