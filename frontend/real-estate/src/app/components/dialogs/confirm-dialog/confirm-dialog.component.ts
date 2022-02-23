import { Component, OnInit, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'db-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  public confirmButton : string = null;
  public closeButton : string = null;
  public text : string = null;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  public ngOnInit() {

    if (!this.data) {
      this.text = 'Are you sure you want to delete?';
      this.confirmButton = 'YES';
      this.closeButton = 'NO';
    }else{
      this.text = this.data?.text;
      this.confirmButton = this.data?.confirmButton;
      this.closeButton = this.data?.closeButton; 
    }
    //
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public confirmDelete(): void {
    this.dialogRef.close(1);
  }

}
