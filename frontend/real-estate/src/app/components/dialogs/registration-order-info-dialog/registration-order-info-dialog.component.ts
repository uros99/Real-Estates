import { Component, Inject, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { RegistrationOrder } from '../../../models/registration-order';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-order-info-dialog',
  templateUrl: './registration-order-info-dialog.component.html',
  styleUrls: ['./registration-order-info-dialog.component.scss']
})
export class RegistrationOrderInfoDialogComponent implements OnInit {

  public registrationOrder: RegistrationOrder;
  public accepted: boolean = false;

  constructor(
    private orderService: OrderService,
    public dialogRef: MatDialogRef<RegistrationOrderInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const registrationOrder = this.data?.order as RegistrationOrder;
    console.log(registrationOrder);
    this.registrationOrder = registrationOrder;
    this.registrationOrder.agency = registrationOrder?.agency;
    this.registrationOrder.birthDate = registrationOrder?.birthDate;
    this.registrationOrder.city = registrationOrder?.city;
    this.registrationOrder.customerType = registrationOrder?.customerType;
    this.registrationOrder.email = registrationOrder?.email;
    this.registrationOrder.firstname = registrationOrder?.firstname;
    this.registrationOrder.profileImage = registrationOrder?.profileImage;
    this.registrationOrder.lastname = registrationOrder?.lastname;
    this.registrationOrder.licenseId = registrationOrder?.licenseId;
    this.registrationOrder.password = registrationOrder?.password;
    this.registrationOrder.phoneNumber = registrationOrder?.phoneNumber;
    this.registrationOrder.username = registrationOrder?.username;
    console.log(this.registrationOrder);
  }

  submit(){
    if(this.accepted){
      this.orderService.approveRegistration(this.registrationOrder).subscribe((res : any)=>{
        if(res.status === 200){
          this.dialogRef.close({message : 'success'});
        } else {
          this.dialogRef.close({message : 'error'});
        }
      });
    }else{
      this.orderService.rejectRegistration(this.registrationOrder).subscribe((res : any)=>{
        if(res.status === 200){
          this.dialogRef.close({message : 'success'});
        } else {
          this.dialogRef.close({message : 'error'});
        }
      });
    }
  }

  close(){
    this.dialogRef.close();
  }

}
