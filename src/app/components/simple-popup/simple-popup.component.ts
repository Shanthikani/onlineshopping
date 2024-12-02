import { Component,EventEmitter,Output,Input } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-simple-popup',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconButton],
  templateUrl: './simple-popup.component.html',
  styleUrl: './simple-popup.component.css'
})
export class SimplePopupComponent {
  @Output() close=new EventEmitter<void>();
  @Input() data:any;

  closePopup()
  {
    this.close.emit();
  }


}
