import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  savePassword: boolean = false;
  hidePassword: boolean = true;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }
  

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    console.log("Logined")
    // Implement your login logic here
    if (this.savePassword) {
      console.log('Save Password:', this.savePassword);
      // Store login credentials in local storage or cookie
    }
    
  }
}
