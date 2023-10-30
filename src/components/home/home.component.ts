import { Component } from '@angular/core';
import {first} from "rxjs";
import {Router} from "@angular/router";
import { AuthService} from "../../app/auth.service"
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  protected readonly first = first;
  // isLoggedIn: boolean = false
  //
  // offLogin(): void{
  //   this.isLoggedIn = !this.isLoggedIn
  //   this.router.navigate(['/auth'])
  // }
  constructor(private router: Router, public authService: AuthService) {
  }

  logOut(){
    const confirmation = window.confirm('Вы уверены, что хотите выйти?');
    if(confirmation){
      setTimeout(() =>{
        this.router.navigate([''])
        this.authService.onLogout()
      }, 1000)
      
    }  
  }
}
