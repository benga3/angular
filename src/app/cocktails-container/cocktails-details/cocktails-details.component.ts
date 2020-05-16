import { Component, OnInit, Input} from '@angular/core';
import {Cocktail} from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service'

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  constructor(private cocktailService:CocktailService) { }
  cocktail:Cocktail;

  ngOnInit(): void {
    //Liaison du coctail du service et de celui de detail
    this.cocktailService.cocktail.subscribe(
      (cocktail:Cocktail) => this.cocktail = cocktail
      );
  }

}
