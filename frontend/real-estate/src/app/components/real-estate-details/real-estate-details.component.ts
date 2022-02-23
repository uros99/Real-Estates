import { Component, Input, OnInit } from '@angular/core';
import { RealEstate } from '../../models/real-estate';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.scss']
})
export class RealEstateDetailsComponent implements OnInit {

  @Input() realEstate: RealEstate;
  @Input() moreDetailsFlag: boolean | true;
  public image: string;
  public avgPricePerMeter: number;
  public tooltip: string;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.initTooltip();
    this.image = this.realEstate.images[0];
    this.locationService.getAvgPricePerSquareMeterOnLocationByType(this.realEstate?.type, this.realEstate?.microlocation).subscribe((res:any)=>{
      this.avgPricePerMeter = res?.avgPricePerMeter;
    })
  }

  initTooltip(){
    if(this.moreDetailsFlag){
      this.tooltip = "";
    }else{
      this.tooltip = "Log in first";
    }
  }

  moreDetails(realEstate: RealEstate){
    this.router.navigate(['real-estate/' + this.realEstate['_id']]);
  }

}
