import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = ''
@Injectable({
  providedIn: 'root'
})
export class UserService {

private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
public userObservables : Observable<User>

  constructor(private http:HttpClient, private toastrService:ToastrService) {
this.userObservables = this.userSubject.asObservable();
   }

   logIn(userLogin:IUserLogin):Observable<User>{
     return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
       next: (user) => {
        this.setUserToLocalStorage(user)
         this.toastrService.success(`Welcome to TC Foodcorner ${user.name}!`,
           'Login Successful !');
       },
       error: (errorResponse) => {
         this.toastrService.error(errorResponse.error, 'Login Failed!');
       }
     }));
   }
   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
   }
   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
   }
   private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson)
    return JSON.parse(userJson) as User;
  return new User();
   }
}
