import { Component, inject } from "@angular/core";
import { PokelistService } from "./shared/pokelist-service";
import { Pokelist, PokemonReference } from "./shared/pokelist.type";
import { PokemonComponent } from "./pokemon/pokemon.component";

@Component({
    selector: 'app-pokemon-library',
    imports: [PokemonComponent],
    template: `
        @if (pokemons){
            @for (pokemon of pokemons; track pokemon.name) {
                <app-pokemon [pokemonReference]="pokemon" />
            }
        } @else {
         <p>Fetching Pokémon list</p>
        }
    `,
    standalone: true,
})
export class PokemonLibraryComponent {
    pokemons:PokemonReference[]|null=null;
    
    constructor(private pokelistService: PokelistService){
        
    }
    ngOnInit(){this.pokelistService.getPokemons().subscribe(response => this.pokemons = response.results);}
}