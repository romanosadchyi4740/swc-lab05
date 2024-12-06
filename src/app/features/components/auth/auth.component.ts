import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            [(ngModel)]="username"
            name="username"
            required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="password"
            name="password"
            required>
        </div>
        <button type="submit" [disabled]="!loginForm.form.valid">
          Login
        </button>
        <div *ngIf="error" class="error">
          Invalid credentials
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [
    FormsModule
  ],
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:disabled {
      background-color: #ccc;
    }

    .error {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.error = false;
    this.authService.login(this.username, this.password)
      .subscribe(success => {
        if (success) {
          this.router.navigate(['']);
        } else {
          this.error = true;
        }
      });
  }
}
