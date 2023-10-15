import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn: boolean = false

  getIsLoggedIn(): boolean{
    return this.isLoggedIn
  }

  setIsLoggedIn(value: boolean){
    this.isLoggedIn = value
  }
  constructor() { }
}
