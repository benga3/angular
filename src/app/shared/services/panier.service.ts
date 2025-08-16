import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/Ingredient.model';

@Injectable({providedIn: 'root'})
export class PanierService {

public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null)
  constructor() { }

  public addIngredients(ingredients:Ingredient[]):void{
    const currentValue = this.panier.value;
    if (currentValue) {
      this.panier.next(currentValue.concat(ingredients))
    } else {
      this.panier.next(ingredients);
    }
  }

}
