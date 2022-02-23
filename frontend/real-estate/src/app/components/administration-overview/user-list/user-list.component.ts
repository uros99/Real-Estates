import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoDialogComponent } from '../../dialogs/user-info-dialog/user-info-dialog.component';
import { EditUserDialogComponent } from '../../dialogs/edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() listChange: EventEmitter<number> = new EventEmitter<number>();
  public displayedColumns: string[] = ['Customer Name', 'Username', 'City', 'Birth Date', 'More Info', 'Actions'];
  
  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDetails(user: User){
    this.dialog.open(UserInfoDialogComponent, {data: {user: user}}).afterClosed().subscribe(()=>{

    });
  }

  editUser(user: User){
    this.dialog.open(EditUserDialogComponent, {data : {user : user}}).afterClosed().subscribe((res)=>{
      if(res.message === 'success'){
        this.listChange.emit(1);
      }
    });
  }

  deleteUser(user: User){
    const body = user as User;
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe((res)=>{
      if(res === 1){
        this.userService.deleteUser(body).subscribe((res:any)=>{
          if(res?.status === 200){
            this.listChange.emit(1);
          }
        });
      }
    });
  }

}
