import { Component } from '@angular/core';
import {Cocktail} from './shared/models/cocktail.model'
import {CocktailService} from './shared/services/cocktail.service'

import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailService],
  imports: [HeaderComponent, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'cocktails';
}
