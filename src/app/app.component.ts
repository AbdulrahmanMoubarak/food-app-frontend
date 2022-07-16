import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';
import { FoodService } from './food.service';
import { IngredientModel } from './models/IngredientModel';
import { RecipeModel } from './models/RecipeModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query: String = ""
  showMeals: boolean = false
  showIngredients: boolean = false
  ingredients:IngredientModel[]=[]
  recipes:RecipeModel[]=[]
  constructor(private foodService: FoodService){

  }

  getIngredients(){
    this.showIngredients = false;
    this.showMeals = false;
    this.foodService.searchIngredients(this.query).subscribe((res:IngredientModel[])=>{
        console.log(res[0].name);
        this.ingredients = res;
        this.showIngredients = true
    });
  }

  getRecipes(event:any, ing:string){
    this.foodService.searchMealsByIngredient(ing).subscribe((res:RecipeModel[])=>{
        console.log(res[0].title);
        this.recipes = res;
        this.showMeals = true
    });
  }

  downloadRecipe(rid: number){
    console.log("id=" + rid)
    this.foodService.redirectToPdf(rid);
  }
}
