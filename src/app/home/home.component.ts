import { Component } from '@angular/core';
import {first} from "rxjs";
import {Router} from "@angular/router";
import { AuthServiceService} from "../auth-service.service";

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
  constructor(private router: Router, private authService: AuthServiceService) {
  }
}
