import { Component, Input } from '@angular/core';
import { PokemonService } from './shared/pokemon.service';
import { PokemonReference } from '../shared/pokelist.type';
import { Pokemon } from './shared/pokemon';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  @Input() pokemonReference: PokemonReference | null = null
  pokemon: Pokemon | null = null

  constructor(private pokemonService : PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemon(this.pokemonReference!.url).subscribe(pokemon=> this.pokemon = pokemon)
  }
}
