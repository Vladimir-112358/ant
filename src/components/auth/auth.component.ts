import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    validateForm: FormGroup<{
    login: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    remember: [true]
  });
  
  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) {}
  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
  
  validateControl(controlName: string): string{
    const control = this.validateForm.get(controlName);
    if(control.dirty && control.invalid){
      return "error"
    }return 'ok'
    
  }
  // onLogin(): void{
  //   if(this.login === "login" && this.password === "password"){
  //     this.isLoggedIn = !this.isLoggedIn
  //     this.router.navigate(['/home']);

  //   }
  //   else {
  //     window.alert("Неверные логин и пароль")
  //   }
  // }



  authorization(){
    this.authService.onLogin(this.validateForm.value.login, this.validateForm.value.password)
    if(this.authService.isLoggedIn === true){
      this.router.navigate(['/home'])
    } else{
      window.alert("Некорректный логин и/или пароль")
    }
  }


}
