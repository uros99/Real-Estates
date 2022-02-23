import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { RegistrationOrder } from '../../models/registration-order';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-administration-overview',
  templateUrl: './administration-overview.component.html',
  styleUrls: ['./administration-overview.component.scss']
})
export class AdministrationOverviewComponent implements OnInit {

  public registrationOrders: RegistrationOrder[] = [];
  public users: User[] = [];
  public user: User;
  public activeTab = 0;
  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    const apiCalls = [];
    apiCalls.push(this.orderService.getAllRegistrationOrders());
    apiCalls.push(this.userService.getAllUsers());
    forkJoin(apiCalls).subscribe(([registrationOrders, users]: [RegistrationOrder[], User[]]) => {
      this.registrationOrders = registrationOrders;
      this.users = users;
    })
  }

  reload(event){
    console.log('usao');
    this.ngOnInit();
    this.activeTab = event;
  }

}
