import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

constructor(private api:FoodService,activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.foods= this.api.getAllFoodBySearchTerm(params.searchTerm)
    else
    this.foods=api.getAll()   //get all data return
  })
 
}

ngOnInit(){
 
}

}
