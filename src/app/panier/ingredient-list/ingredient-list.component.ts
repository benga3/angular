import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/Ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit, OnDestroy {
  public ingredients:Ingredient[] = [ ];
  //L'obtention de la subscription permet d'agir (detruire) l'observation et l'obsevable
  private subscription:Subscription;

  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
    this.subscription = this.panierService.panier.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
