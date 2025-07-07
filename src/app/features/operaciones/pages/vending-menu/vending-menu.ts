import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vending-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vending-menu.html',
  styleUrl: './vending-menu.scss'
})
export class VendingMenu {}
