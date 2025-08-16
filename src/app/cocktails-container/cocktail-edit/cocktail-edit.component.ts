import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule} from '@angular/forms'
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/Ingredient.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css'],
  imports: [RouterLink, ReactiveFormsModule]
})
export class CocktailEditComponent implements OnInit {
  cocktailForm:FormGroup;
  cocktail:Cocktail;
  index:number;
  constructor(
    private fb:FormBuilder, 
    private cocktailService:CocktailService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        if(params.get('index')) {
          this.index = Number(params.get('index'));
          this.cocktail = this.cocktailService.getCocktail(params.get('index'));
          this.initForm(this.cocktail);
        } else {
          this.initForm();
          console.log("No cocktail");
        }
      });
    

  }


  initForm(cocktail = {name:'', img: '', desc:'', ingredients:[]}){
    this.cocktailForm = this.fb.group({
      name:[cocktail.name, Validators.required],
      img:[cocktail.img,Validators.required],
      desc: [cocktail.desc, Validators.minLength],
      ingredients: this.fb.array(cocktail.ingredients.map( (engredient:Ingredient) => this.fb.group(
        {
          name: engredient.name, 
          quantity:engredient.quantity
        }
        )))
    })

  }

  public createCocktail(){
    
    this.cocktailService.addCocktail(this.cocktailForm.value);
    console.log(this.cocktailForm)
  }
  
  addIngredient():void{
    ( this.cocktailForm.get('ingredients') as FormArray).push(this.fb.group({
      name:['', Validators.required],
      quantity: ['',Validators.required]
    }))
  }

}
