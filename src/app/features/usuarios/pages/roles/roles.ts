import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  templateUrl: './roles.html',
  styleUrl: './roles.scss'
})
export class Roles implements OnInit {
  roles: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/usuarios/roles').subscribe(data => (this.roles = data));
  }
}
