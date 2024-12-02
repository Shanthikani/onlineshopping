import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaincomponentComponent } from '../maincomponent/maincomponent.component';


@Component({
  selector: 'app-productcomponent',
  standalone: true,
  imports: [RouterLink,MaincomponentComponent],
  templateUrl: './productcomponent.component.html',
  styleUrl: './productcomponent.component.css'
})
export class ProductcomponentComponent {
  constructor()
  {
debugger;
  }
}
