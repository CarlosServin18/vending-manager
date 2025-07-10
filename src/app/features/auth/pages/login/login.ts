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
    this.api.get('/login').subscribe(() => {
      if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['/inicio']);
      } else {
        alert('Datos incorrectos');
      }
    });
  }
}
