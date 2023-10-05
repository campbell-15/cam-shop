import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe(
    'Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DJt6fbM1D4WEBRivltjD8bb-7DpYxtbFQA&usqp=CAU',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Juicy Burger',
    'What else needs to be said?',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSko_1kWLwbFom_uqDIDO0w6XgOtA4zyxcj4u10vFSrl_dz1_b6TaMsNAhlpAAlZJe7_Jk&usqp=CAU',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
