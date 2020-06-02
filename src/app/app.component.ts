import { Component } from '@angular/core';
import {Cocktail} from './shared/models/cocktail.model'
import {CocktailService} from './shared/services/cocktail.service'

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailService]
})
export class AppComponent {
  title = 'cocktails';
}
