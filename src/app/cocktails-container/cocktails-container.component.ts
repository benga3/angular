import { Component, OnInit } from '@angular/core';
import {CocktailsDetailsComponent} from './cocktails-details/cocktails-details.component';
import {CocktailsListComponent} from './cocktails-list/cocktails-list.component';
import {Cocktail} from '../shared/models/cocktail.model';
import { from } from 'rxjs';
import {CocktailService} from '../shared/services/cocktail.service'


@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css']
})
export class CocktailsContainerComponent {

  constructor() { }

  
}
