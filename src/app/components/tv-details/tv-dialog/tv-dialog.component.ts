import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tv-dialog',
  templateUrl: './tv-dialog.component.html',
  styleUrls: ['./tv-dialog.component.css']
})
export class TvDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close('movie');
  }

  ngOnInit(): void {
  }

}
