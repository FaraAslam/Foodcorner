import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';
import { sample_foods, sample_tags } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  //get all foods
  getAll():Observable<Food[]>{
return this.httpClient.get<Food[]>(FOODS_URL)
  }
  //get food by search term
  getAllFoodBySearchTerm(searchTerm:string){
return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }
  //get all tags
  getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL)
  }
  //get food by tag
  getAllFoodByTags(tag:string):Observable<Food[]>{
return tag === "All"?this.getAll():this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }
  //get food by id
getFoodById(foodId:string):Observable<Food>{
return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId)
}
}
