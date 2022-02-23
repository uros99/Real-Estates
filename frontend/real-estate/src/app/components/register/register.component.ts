import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form : FormGroup;
  public image : string;

  constructor(
    private userService : UserService,
    private orderService: OrderService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname : new FormControl(null, [Validators.required]),
      lastname : new FormControl(null, [Validators.required]),
      username : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('([a-z]|[A-Z]).*'),
        Validators.pattern('^.*[A-Z].*'),
        Validators.pattern('^.*[0-9].*'),
        Validators.pattern('^.*[!,@,#,$,%].*')]),
      city : new FormControl(null, [Validators.required]),
      birthDate : new FormControl(null, [Validators.required]),
      phoneNumber : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      profileImage : new FormControl(null, Validators.required),
      agency : new FormControl(null),
      licenseId : new FormControl(null)
    });
  }

  public onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.image = event.target.result;
        this.form.controls?.profileImage.setValue(this.image);
        console.log(this.image); 
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public cancel(){
    this.router.navigate(['']);
  }

  public register(){
    const body = this.form.value;
    body.customerType = body?.agency === null ? User.UserKindEnum.Buyer : User.UserKindEnum.Agent;
    this.orderService.register(body).subscribe(res=>{
      this.dialog.open(ConfirmDialogComponent, {data : {text : 'Your registration has been sent, please wait respond', closeButton : 'CLOSE'}})
        .afterClosed().subscribe((res)=>{
          this.router.navigate(['']);
        })
    });
  }

}
