import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username : string;
  public password : string;
  public form : FormGroup;

  constructor(
    private userService : UserService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      captcha : new FormControl(null, [Validators.required])
    });
  }

  public resolved(captchaResponse: string): void {
    this.form.controls?.captcha.setValue(true);
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    this.form.controls?.captcha.setValue(null);
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  public login() {
    this.userService.login(this.form.controls?.username.value, this.form.controls?.password.value).subscribe((res) => {
      if(res){
        sessionStorage.setItem('user', JSON.stringify(res));
        const user = res as User;
        switch(user.customerType){
          case User.UserKindEnum.Admin:
            this.router.navigate(['administration']);
            break;
          case User.UserKindEnum.Agent:
            this.router.navigate(['agent']);
            break;
          case User.UserKindEnum.Buyer:
            this.router.navigate(['buyer']);
            break;
        }
      }else{
        this.dialog.open(ConfirmDialogComponent, {data : {text : 'User does not exists', closeButton : 'CLOSE'}})
      }
    },(err : HttpErrorResponse) => {
      console.log(err);
    });
  }

  public register(){
    this.router.navigate(['register']);
  }

}
