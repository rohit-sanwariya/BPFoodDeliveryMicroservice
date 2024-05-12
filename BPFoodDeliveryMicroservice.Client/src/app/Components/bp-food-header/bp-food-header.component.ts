import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bp-food-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    
  ],
  templateUrl: './bp-food-header.component.html',
  styleUrl: './bp-food-header.component.scss'
})
export class BpFoodHeaderComponent {

}
