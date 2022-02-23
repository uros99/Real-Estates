import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-information-tab',
  templateUrl: './my-information-tab.component.html',
  styleUrls: ['./my-information-tab.component.scss']
})
export class MyInformationTabComponent implements OnInit {

  @Input() public user: User;
  public form: FormGroup;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
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

  edit(){
    
  }

}
