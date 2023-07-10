import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWuWCkEMPQMlzAyPRNm_uKzuNM2tukraxxIZRVxzge8SfLIn3G46o4kQnlVOeGbB42Bw&usqp=CAU')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}