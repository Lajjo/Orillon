export interface PokemonReference {
    name: string,
    url: URL,
}

export interface Pokelist {
    count:number,
    next: URL|null,
    previous: URL|null,
    results: PokemonReference[],
}