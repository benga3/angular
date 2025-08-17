import { Component } from '@angular/core';
import {CocktailService} from './shared/services/cocktail.service'

import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailService],
  imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent {
  title = 'cocktails';
}
