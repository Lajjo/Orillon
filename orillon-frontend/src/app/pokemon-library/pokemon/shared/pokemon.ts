import { PokemonCries } from "./pokemon-cries";
import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStat } from "./pokemon-stat";
import { PokemonType } from "./pokemon-type";

export interface Pokemon {
    id: number,
    name: string,
    sprites: PokemonSprites,
    cries: PokemonCries,
    stats: PokemonStat[],
    types: PokemonType[],
}
