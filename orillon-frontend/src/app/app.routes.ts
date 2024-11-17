import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokemonLibraryComponent} from "./pokemon-library/pokemon-library.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pokemon-library',
        component: PokemonLibraryComponent,
    },
];
