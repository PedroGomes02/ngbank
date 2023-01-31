import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
})
export class DialogModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string; value: number }
  ) {}
}
