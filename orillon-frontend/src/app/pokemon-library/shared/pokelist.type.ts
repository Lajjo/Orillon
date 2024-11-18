export interface PokemonReference {
    name: string,
    url: string,
}

export interface Pokelist {
    count:number,
    next: string|null,
    previous: string|null,
    results: PokemonReference[],
}