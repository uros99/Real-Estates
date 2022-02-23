import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-images-dialog',
  templateUrl: './upload-images-dialog.component.html',
  styleUrls: ['./upload-images-dialog.component.scss']
})
export class UploadImagesDialogComponent implements OnInit {

  public images: string[] = [];
  public numOfUploadImages: number = 0;
  public message;

  constructor(
    public dialogRef: MatDialogRef<UploadImagesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.images = this.data?.images;
    this.numOfUploadImages = this.images.length;
    if(this.numOfUploadImages < 3 || this.numOfUploadImages > 6){
      this.message = 'You need to upload at least 3 images, but not more than 6';
    }else{
      this.message = '';
    }
  }

  importImages(event){
    if (event.target.files && event.target.files[0]) {
      this.numOfUploadImages += event.target.files.length;
      if(this.numOfUploadImages < 3 || this.numOfUploadImages > 6){
        this.message = 'You need to upload at least 3 images, but not more than 6';
      }else{
        this.message = '';
      }
      for (let i = 0; i <  this.numOfUploadImages; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }

  clear(){
    this.images = [];
    this.numOfUploadImages = 0;
    this.message = 'You need to upload at least 3 images, but not more than 6';
  }

  submit(){
    if(this.numOfUploadImages >= 3 || this.numOfUploadImages <= 6){
      this.dialogRef.close({images : this.images})
    }
  }

  close(){
    this.dialogRef.close({images : this.images});
  }

}
