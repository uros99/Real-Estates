import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RealEstate } from '../../models/real-estate';
import { RealEstateService } from '../../services/real-estate.service';
import { FilterRealEstateDialogComponent } from '../dialogs/filter-real-estate-dialog/filter-real-estate-dialog.component';

@Component({
  selector: 'app-buyer-overview',
  templateUrl: './buyer-overview.component.html',
  styleUrls: ['./buyer-overview.component.scss']
})
export class BuyerOverviewComponent implements OnInit {

  public realEstates: RealEstate[]
  constructor(
    private realEstateService: RealEstateService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.realEstateService.getUnSoldRealEstates().subscribe((res:RealEstate[])=>{
      this.realEstates = res;
    })
  }

  openFilterDialog(){
    this.dialog.open(FilterRealEstateDialogComponent).afterClosed().subscribe((res)=>{
      if(res){
        this.realEstates = res?.realEstates;
      }
    })
  }

}
