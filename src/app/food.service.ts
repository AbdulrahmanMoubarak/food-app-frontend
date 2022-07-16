import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IngredientModel } from './models/IngredientModel';
import { Observable } from 'rxjs';
import { RecipeModel } from './models/RecipeModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseURL='http://localhost:8080/';

  private httpHeaders = {'Access-Control-Allow-Origin':'*/*',
  'Access-Control-Allow-Credentials':'true',
  'Content-Type':'application/json'
  };

  private httpOptions={headers:new HttpHeaders(this.httpHeaders)};


  constructor(private http:HttpClient, private router: Router) { }

  searchIngredients(query: String): Observable<IngredientModel[]>{
    console.log("searchIngredients")
    return this.http.get<IngredientModel[]>(this.baseURL+'ingredients/search?query='+query, this.httpOptions)
  }

  searchMealsByIngredient(ingName: String){
    console.log("searchMealsByIngredient")
    return this.http.get<RecipeModel[]>(this.baseURL+'ingredients/'+ingName+'/search', this.httpOptions)
  }

  redirectToPdf(rid: number){
    window.location.href = this.baseURL+"recipes/"+rid+"/steps/download-pdf";
  }
}
