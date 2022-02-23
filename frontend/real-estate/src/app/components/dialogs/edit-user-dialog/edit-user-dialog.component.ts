import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  public user: User;
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.data?.user;
    this.form = new FormGroup({
      firstname : new FormControl(this.user?.firstname, [Validators.required]),
      lastname : new FormControl(this.user?.lastname, [Validators.required]),
      username : new FormControl(this.user?.username, [Validators.required]),
      password : new FormControl(this.user?.password, [Validators.required]),
      city : new FormControl(this.user?.city, [Validators.required]),
      birthDate : new FormControl(this.user?.birthDate, [Validators.required]),
      phoneNumber : new FormControl(this.user?.phoneNumber, [Validators.required]),
      email : new FormControl(this.user?.email, [Validators.required]),
      agency : new FormControl(this.user?.agency),
      licenseId : new FormControl(this.user?.licenseId)
    });
  }

  submit(){
    const body = this.form.value;
    body.user = this.user.username;
    this.userService.editUser(body).subscribe((res : any)=>{
      if(res.status === 200){
        this.dialogRef.close({message : 'success'});
      } else {
        this.dialogRef.close({message : 'error'});
      }
    });
  }

  close(){
    this.dialogRef.close();
  }

}
