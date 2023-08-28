import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

food!:Food;
constructor(activateRoute:ActivatedRoute,private api:FoodService,private cartService:CartService,private router:Router){
  activateRoute.params.subscribe((params)=> {
    api.getFoodById(params.id).subscribe(serverFood=>{
      this.food = serverFood;
    })

  })
}


ngOnInit():void{}

addToCart(){
  debugger
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page')
}
}
