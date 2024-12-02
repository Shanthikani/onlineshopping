
import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../models/product.model';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  constructor(public dialogRef:MatDialogRef<ModelComponent>,@Inject(MAT_DIALOG_DATA) public data:Product)
  {
console.log(data.description);
  }
  closeDialog()
  {
    this.dialogRef.close('Dialog close');
  }

}
