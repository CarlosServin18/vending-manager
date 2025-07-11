import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

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

  constructor(private router: Router, private api: ApiService) {}

  login() {
    if (!this.username || !this.password) {
      alert('Datos incorrectos');
      return;
    }

    this.api.post('login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => this.router.navigate(['/inicio']),
      error: () => alert('Datos incorrectos')
    });
  }
}
