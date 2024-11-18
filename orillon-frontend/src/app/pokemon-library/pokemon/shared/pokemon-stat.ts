import { PokemonAPIResource } from "./pokemon-api-resource";

export interface PokemonStat {
    stat:PokemonAPIResource,
    effort: number,
    base_stat: number
}
