import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../models/user';
import { RealEstate } from '../../../models/real-estate';
import { RealEstateService } from '../../../services/real-estate.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { EditRealEstateDialogComponent } from '../../dialogs/edit-real-estate-dialog/edit-real-estate-dialog.component';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.scss']
})
export class RealEstateListComponent implements OnInit {

  public realEstates: RealEstate[] = [];
  public displayedColumns: string[] = ['Real Estate Name', 'Price', 'Edit', 'Sold'];
  @Input() public user: User;
  
  constructor(
    private realEstateService: RealEstateService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.realEstateService.getMyRealEstates(this.user.username).subscribe((res : [])=>{
      this.realEstates = res;
    })
  }

  editRealEstate(realEstate: RealEstate){
    this.dialog.open(EditRealEstateDialogComponent, {data: {realEstate: realEstate}, height:'100%'}).afterClosed().subscribe((res)=>{
      if(res?.message === 'success'){
        this.ngOnInit();
      }
    })
  }

  sellRealEstate(realEstate: RealEstate){
    this.dialog.open(ConfirmDialogComponent, {data : {text : 'Are you sure you want to sell it?', confirmButton : 'YES', closeButton : 'NO'}}).afterClosed().subscribe((res) => {
      if(res == 1){
        const body : any = realEstate;
        body.id = realEstate['_id'];
        this.realEstateService.sellRealEstate(realEstate).subscribe((res) => {
          this.ngOnInit();
        })
      }
    })
  }

}
