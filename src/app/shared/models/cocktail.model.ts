import {Ingredient} from './Ingredient.model'

export class Cocktail{
    
    constructor(
        public name:string, 
        public img:string, 
        public desc:string,
        public ingredients: Ingredient[])
        {} 
}