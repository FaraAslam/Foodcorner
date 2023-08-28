import { Food } from "./app/shared/models/food"
import { Tag } from "./app/shared/models/tag"


export const sample_foods:Food[]=[
    {
        id:'1',
        name:'Chicken Soup',
        Price:10,
        tag:['Soup', 'Dinner'],
        favorite:true,
        stars:'⭐',
        imageUrl:'assets/Images/food-1.jpg',
        origins:['Asian'],
        cookTime:'30-35',
        
    },
    {
        id:'2',
        name:'Meatball',
        Price:15,
        tag:['Meatball','Lunch','Slowfood'],
        favorite:false,
        stars:'⭐',
        imageUrl:'assets/Images/food-2.jpg',
        origins:['Middle East','China'],
        cookTime:'30-35'
    },
    {
        id:'3',
        name:'Cheese Burger',
        Price:10,
        tag:['Burger','FastFood','Lunch'],
        favorite:true,
        stars:'⭐',
        imageUrl:'assets/Images/food-3.jpg',
        origins:['US'],
        cookTime:'20-25'
    },
    {
        id:'4',
        name:'Hamburger',
        Price:15,
        tag:['Burger','FastFood','Lunch'],
        favorite:false,
        stars:'⭐',
        imageUrl:'assets/Images/food-4.jpg',
        origins:['US','Germany'],
        cookTime:'20-25'
    },
    {
        id:'5',
        name:'French Fries',
        Price:5,
        tag:['Fry','FastFood'],
        favorite:true,
        stars:'⭐',
        imageUrl:'assets/Images/food-5.jpg',
        origins:['France','Belgium'],
        cookTime:'10-15'
    },
    {
        id:'6',
        name:'Vegetable Pizza',
        Price:12,
        tag:['Pizza','Lunch','FastFood'],
        favorite:false,
        stars:'⭐',
        imageUrl:'assets/Images/food-6.jpg',
        origins:['Italy'],
        cookTime:'30-35'
    },
    {
        id:'7',
        name:'Chipotle',
        Price:10,
        tag:['Slowfood','Lunch'],
        favorite:true,
        stars:'⭐',
        imageUrl:'assets/Images/food-7.jpg',
        origins:['Mexican'],
        cookTime:'15-20'
    },
    {
        id:'8',
        name:'Cheese Pizza',
        Price:10,
        tag:['Pizza',"FastFood"],
        favorite:false,
        stars:'⭐',
        imageUrl:'assets/Images/food-8.jpg',
        origins:['Italy'],
        cookTime:'20-25'
    },
]
export const sample_tags:Tag[]=[
{name: 'All',count:8},
{name: 'FastFood',count:5},
{name:'Pizza', count:2},
{name:'Lunch', count:5},
{name:'Slowfood', count:2},
{name:'Burger', count:2},
{name:'Fry',count:1},
{name:'Soup',count:1},
]