import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../../models/real-estate';
import { RealEstateService } from '../../services/real-estate.service';

@Component({
  selector: 'app-start-overview-page',
  templateUrl: './start-overview-page.component.html',
  styleUrls: ['./start-overview-page.component.scss']
})
export class StartOverviewPageComponent implements OnInit {

  public realEstates: RealEstate[] = [];

  constructor(
    private realEstateService: RealEstateService
  ) { }

  ngOnInit(): void {
    this.realEstateService.getAllRealEstates().subscribe((res : RealEstate[]) => {
      let i = res.length - 5 < 0 ? 0 : res.length - 5;
      for(let start = i; start < res.length; start++){
        this.realEstates.push(res[start]);
      }
    })
  }

}
