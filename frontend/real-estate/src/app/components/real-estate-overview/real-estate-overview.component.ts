import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../services/real-estate.service';
import { RealEstate } from '../../models/real-estate';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Agency } from '../../models/agency';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-real-estate-overview',
  templateUrl: './real-estate-overview.component.html',
  styleUrls: ['./real-estate-overview.component.scss']
})
export class RealEstateOverviewComponent implements OnInit {

  public realEstate: RealEstate;
  public agency: any;
  public user: any;
  public currentImage: number = 0;
  public currentImageSrc: string;
  public numberOfImages: number;
  public disableBack:boolean = true;
  public disableForward: boolean = false;
  public form: FormGroup;
  public characteristicsArr: any[];
  public avgPricePerMeterOnLocation: number;
  public avg: boolean;

  constructor(
    private realEstateService: RealEstateService,
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.initCharacteristics();
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      if(params.realEstateId){
        this.realEstateService.getRealEstate(params.realEstateId).subscribe((res: any)=>{
          this.realEstate = res;
          if(this.realEstate.advertiser.length == 1){
            this.user = this.realEstate.advertiser[0];
            this.agency = null;
          }else if(this.realEstate.advertiser.length == 2){
            this.agency = this.realEstate.advertiser[0];
            this.user = this.realEstate.advertiser[1];  
          }
          this.numberOfImages = this.realEstate.images.length;
          this.currentImageSrc = this.realEstate.images[this.currentImage];
          this.realEstate.characteristics.forEach(characteristic => {
            this.form.setControl(characteristic, new FormControl(true));
          });
          this.locationService.getAvgPricePerSquareMeterOnLocationByType(this.realEstate?.type, this.realEstate?.microlocation).subscribe((res:any)=>{
            this.avgPricePerMeterOnLocation = res?.avgPricePerMeter;
            const avgPricePerMeter = this.realEstate?.price / this.realEstate?.area;
            this.avg = this.avgPricePerMeterOnLocation < avgPricePerMeter ? true : false;
          })
        })
      }
    })
  }

  private initCharacteristics(){
    this.characteristicsArr = [
      {value: 'terasa', viewValue: 'Terasa'},
      {value: 'lift', viewValue: 'Lift'},
      {value: 'garaza', viewValue: 'Garaza'},
      {value: 'klima', viewValue: 'Klima'},
      {value: 'internet', viewValue: 'Internet'},
      {value: 'interfon', viewValue: 'Interfon'},
      {value: 'telefon', viewValue: 'Telefon'},
      {value: 'podrum', viewValue: 'Podrum'},
      {value: 'lodja', viewValue: 'Lodja' },
      {value: 'francuski balkon', viewValue: 'Francuski balkon'},
      {value: 'basta', viewValue: 'Basta'}
    ];
  }

  private initForm(){
    this.form = new FormGroup({});
    this.characteristicsArr.forEach((characteristic)=>{
      this.form.addControl(characteristic.value, new FormControl(false));
    })
  }

  public nextImage(index: number){
    this.currentImage += index;
    if(this.currentImage === 0){
      this.disableBack = true;
    }else if(this.currentImage === this.numberOfImages - 1){
      this.disableForward = true;
    }else{
      this.disableBack = false;
      this.disableForward = false;
    }
    this.currentImageSrc = this.realEstate.images[this.currentImage];
  }

}
