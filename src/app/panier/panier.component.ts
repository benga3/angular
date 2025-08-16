import { Component, OnInit } from '@angular/core';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  imports: [IngredientListComponent]
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
