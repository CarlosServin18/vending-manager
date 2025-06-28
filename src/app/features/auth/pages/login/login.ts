import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.router.navigate(['/']); // o a dashboard
    } else {
      alert('Datos incorrectos');
    }
  }
}
