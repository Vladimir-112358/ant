import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn: boolean = false

  onLogin(login: string, password: string){
    if(login === "admin" && password === "12345"){
      this.isLoggedIn = true
    
  }
}

  onLogout(): void{
    this.isLoggedIn = false
  }

  isAutentificated(): boolean{
    return this.isLoggedIn
  }
}
