import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Cocktail} from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  imports: [CommonModule, RouterLink]
})
export class CocktailsListComponent implements OnInit {
  cocktails:Cocktail[];
  cocktailActive: number = 0;
  constructor(private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.cocktails.subscribe(
      (cocktails:Cocktail[]) => this.cocktails = cocktails 
      );
  }

  /**
   * 
   * @param index index du tableau
   public pickCocktail(index:number):void{
     this.cocktailActive = index;
     this.cocktailService.selectCocktail(index);
    }
    */

}
