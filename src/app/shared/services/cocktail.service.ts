import {Injectable} from '@angular/core';
import {Cocktail} from '../models/cocktail.model'
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/Ingredient.model';
import { CocktailsListComponent } from 'src/app/cocktails-container/cocktails-list/cocktails-list.component';


@Injectable({providedIn: CocktailsListComponent})
/**
 * Ce service contient tous les elements de gestion du coctail
 * On a ajouté deux sujets (Observable ) pour, un pour la liste
 * et l'autre pour le detail du cocktail
 */
export class CocktailService{
    public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(
        [
        new Cocktail(
          "Mojito",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mojito_004.jpg/250px-Mojito_004.jpg","Placer les feuilles de menthe dans le verre, ajoutez le sucre et le jus de citrons. Piler consciencieusement afin d'exprimer l'essence de la menthe mais sans la broyer",
          [
            new Ingredient('perrier',1),
            new Ingredient('Citron',2),
            new Ingredient('Sucre',3)
      ]),
        new Cocktail(
          "Margarita",
        "https://assets.afcdn.com/recipe/20180705/80288_w350h250c1cx1473cy1313cxt0cyt0cxb4493cyb3286.jpg","Frapper les ingrédients au shaker avec des glaçons puis verser dans le verre givré au citron et au sel fin...",
        [
          new Ingredient('Limonade',1),
          new Ingredient('Citron',2),
          new Ingredient('Sel',3)
        ]),
        new Cocktail(
          "Sour",
          "https://static1.villaschweppes.com/articles/5/48/84/5/@/350867-le-cocktail-whisky-schweppes-sour-du-ger-article_source_adaptive-2.png","Comme tous les cocktails sour, le Whisky Sour est un cocktail contenant un alcool mélangé avec du citron - ou du jus de citron - et du sucre. En occurrence, les ingrédients du cocktail Whisky Sour sont du whiskey américain de seigle ou du bourbon",
          [
            new Ingredient('Perrier',1),
            new Ingredient('jus de fraise',2)
          ]),
        new Cocktail(
          "Caipirinha",
          "https://assets.afcdn.com/recipe/20180705/80337_w350h250c1cx2896cy3132cxt0cyt0cxb5791cyb6258.jpg","Lavez le citron vert et coupez les deux extrémités. Coupez le citron en 8 ou 9 morceaux et retirez la partie blanche centrale responsable de l'amertume",
          [
            new Ingredient('Perrier à cannes',1),
            new Ingredient('Citron vert',2),
            new Ingredient('Sucre cristalisé',2)
          ])
      ]
    )
    public cocktail:BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);
    constructor(){}

    /**
     * 
     * @param index 
     selectCocktail(index: number) {
       this.cocktail.next(this.cocktails.value[index]);
      }
  */

      getCocktail(i:string):Cocktail{
        const ind = Number(i);
        return this.cocktails.value[i];
      }

      /**
       * addCocktail
       * cocktail:Cocktail      
       * 
       */
      public addCocktail(cocktail:Cocktail) {
        const cockS = this.cocktails.value.slice();
        cockS.push(new Cocktail(cocktail.name,cocktail.img,cocktail.desc,cocktail.ingredients));
        this.cocktails.next(cockS);
      }

}


