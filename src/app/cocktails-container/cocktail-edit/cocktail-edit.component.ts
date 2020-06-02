import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms'
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  cocktailForm:FormGroup;
  cocktail:Cocktail;
  constructor(private fb:FormBuilder, private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      name:['', Validators.required],
      img:['',Validators.required],
      desc: ['', Validators.minLength],
      ingredients: this.fb.array([])
    })
  }

  public createCocktail(){
    
    this.cocktailService.addCocktail(this.cocktailForm.value);
    console.log(this.cocktailForm)
  }
  
  addIngredient():void{
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name:['', Validators.required],
      quantity: ['',Validators.required]
    }))
  }

}
