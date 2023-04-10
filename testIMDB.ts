import { Imdb } from "./nuevaclaseIMDB";
import { Movie } from "./Movie";

let Film1 = new Movie("Babilon", 2023, "american", "comedy")
let Film2 = new Movie("El Padrino", 1984, "american", "mafia")

let catalogo = new Imdb([Film1, Film2])

console.log(catalogo)