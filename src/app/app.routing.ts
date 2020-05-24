import {Route, RouterModule} from '@angular/router';
import { PanierComponent } from './panier/panier.component' 
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';

const APP_ROUTE:Route[] = [
    {path:'', redirectTo:'cocktails', pathMatch:'full'},
    {path:'panier', component:PanierComponent},
    {path:'cocktails', component:CocktailsContainerComponent}
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE);