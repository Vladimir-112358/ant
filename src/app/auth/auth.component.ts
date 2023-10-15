import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  login: string = "";
  password: string = "";
  isLoggedIn: boolean = false;
  validateForm: FormGroup<{
    login: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });


  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  onLogin(): void{
    if(this.login === "login" && this.password === "password"){
      this.isLoggedIn = !this.isLoggedIn
      this.router.navigate(['/home']);

    }
    else {
      window.alert("Неверные логин и пароль")
    }
  }

  constructor(private fb: NonNullableFormBuilder, private router: Router) {}
}
