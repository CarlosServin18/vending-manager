import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-almacenes-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class AlmacenesMenu {}
