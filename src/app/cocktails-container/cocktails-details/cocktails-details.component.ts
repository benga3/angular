import { Component, OnInit, Input} from '@angular/core';
import {Cocktail} from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service'
import { Ingredient } from 'src/app/shared/models/Ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  constructor(private cocktailService:CocktailService, private panierService:PanierService) { }
  cocktail:Cocktail;

  ngOnInit(): void {
    //Liaison du coctail du service et de celui de detail
    this.cocktailService.cocktail.subscribe(
      (cocktail:Cocktail) => this.cocktail = cocktail
      );
  }

  addPanier(ingredients:Ingredient[]){
      this.panierService.addIngredients(ingredients);
  }

}
