import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { RegistrationOrder } from '../../../models/registration-order';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationOrderInfoDialogComponent } from '../../dialogs/registration-order-info-dialog/registration-order-info-dialog.component';

@Component({
  selector: 'app-registration-order-list',
  templateUrl: './registration-order-list.component.html',
  styleUrls: ['./registration-order-list.component.scss']
})
export class RegistrationOrderListComponent implements OnInit {

  @Input() registrationOrders: RegistrationOrder[];
  @Output() listChange: EventEmitter<number> = new EventEmitter<number>();
  public displayedColumns: string[] = ['Customer Name', 'Username', 'City', 'Birth Date', 'More Info'];
  
  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDetails(order: RegistrationOrder){
    this.dialog.open(RegistrationOrderInfoDialogComponent, {data: {order: order}}).afterClosed().subscribe((res)=>{
      if(res.message === 'success'){
        this.listChange.emit(0);
      }
    });
  }

}
