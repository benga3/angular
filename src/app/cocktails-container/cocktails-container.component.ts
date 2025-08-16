import { Component, OnInit } from '@angular/core';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css'],
  imports: [RouterOutlet, RouterLink, CocktailsListComponent]
})
export class CocktailsContainerComponent {

  constructor() { }

  
}
