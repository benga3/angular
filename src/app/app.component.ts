import { Component } from '@angular/core';
import {Cocktail} from './shared/models/cocktail.model'

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktails';
}
