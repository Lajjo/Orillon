import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokelist } from "./pokelist.type";

@Injectable({providedIn: 'root'})
export class PokelistService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  getPokemons():Observable<Pokelist>{
    return this.http.get<Pokelist>("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
  }
}