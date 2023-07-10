import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Tasty Pancake', 
        'This is simply the best breakfast!', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWuWCkEMPQMlzAyPRNm_uKzuNM2tukraxxIZRVxzge8SfLIn3G46o4kQnlVOeGbB42Bw&usqp=CAU',
        [
            new Ingredient('Flour', 1),
            new Ingredient('Milk', 1),
            new Ingredient('Blueberries', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}