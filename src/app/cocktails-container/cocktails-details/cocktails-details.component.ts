import { Component, OnInit, Input} from '@angular/core';
import {Cocktail} from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service'
import { Ingredient } from 'src/app/shared/models/Ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css'],
  imports: [RouterOutlet, RouterLink]
})
export class CocktailsDetailsComponent implements OnInit {
  private index:number;
  constructor(
    private cocktailService:CocktailService, 
    private panierService:PanierService, 
    private activatedRoute:ActivatedRoute ) { }
  cocktail:Cocktail;

  ngOnInit(): void {
    //Liaison du coctail du service et de celui de detail
    this.cocktailService.cocktail.subscribe(
      (cocktail:Cocktail) => this.cocktail = cocktail
      );

      this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
        if (params.get('index')) {
          this.index = Number(params.get('index'));
          this.cocktail = this.cocktailService.getCocktail(params.get('index'))
        } else {
          this.index = 0;
          this.cocktail = this.cocktailService.getCocktail('0')
        }
      })
  }

  addPanier(ingredients:Ingredient[]){
      this.panierService.addIngredients(ingredients);
  }
  
  getUrl() {
    return '/cocktails/' + this.index + '/edit';
  }



}
