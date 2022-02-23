import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { RealEstateService } from '../../../services/real-estate.service';

@Component({
  selector: 'app-filter-real-estate-dialog',
  templateUrl: './filter-real-estate-dialog.component.html',
  styleUrls: ['./filter-real-estate-dialog.component.scss']
})
export class FilterRealEstateDialogComponent implements OnInit {
  
  public form: FormGroup;
  public cities: any[] = [];
  public municipalities: any[] = [];
  public microlocations: any[] = [];
  public rooms: any[] = [];
  public types: any[];
  public cityChacked = false;

  constructor(
    private realEstateService: RealEstateService,
    private locationService: LocationService,
    public dialogRef: MatDialogRef<FilterRealEstateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.initTypes();
    this.initCities();
    this.initRooms();
    this.form = new FormGroup({
      type : new FormControl(null, [Validators.required]),
      municipalities : new FormControl(null),
      cities : new FormControl(null),
      microlocations : new FormControl(),
      price : new FormControl(null),
      squareFootage : new FormControl(null),
      rooms : new FormControl(null)
    })
  }

  private initCities(){
    const apiCalls = [];
    apiCalls.push(this.locationService.getCities());
    apiCalls.push(this.locationService.getMicrolocations());
    forkJoin(apiCalls).subscribe(([cities, microlocations] : [any[], any[]])=>{
      this.cities = cities;
      this.microlocations = microlocations;
      cities.forEach(city => {
        this.municipalities = this.municipalities.concat(city?.municipalities);
      });
    })
  }

  private initTypes(){
    this.types = [
      {value: 'Apartment', viewValue: 'Apartment'},
      {value: 'House', viewValue: 'House'},
      {value: 'Cottage', viewValue: 'Cottage'},
      {value: 'Local', viewValue: 'Local'},
      {value: 'Warehouse', viewValue: 'Warehouse'},
      
    ];
  }

  private initRooms(){
    this.rooms = [
      {value: 1, viewValue: '1'},
      {value: 1.5, viewValue: '1.5'},
      {value: 2, viewValue: '2'},
      {value: 2.5, viewValue: '2.5'},
      {value: 3, viewValue: '3'},
      {value: 3.5, viewValue: '3.5'},
      {value: 4, viewValue: '4'},
      {value: 4.5, viewValue: '4.5'},
      {value: 5, viewValue: '5'},
    ];
  }

  filter(){
    const body = this.form.value;
    this.realEstateService.searchRealEstate(body).subscribe((res)=>{
      this.dialogRef.close({realEstates : res})
    });
  }

  close(){
    this.dialogRef.close();
  }

  changeCity(city){
    console.log('USLO')
    if(this.form.controls?.cities?.value?.length === 0){
      this.municipalities = [];
      this.cities.forEach(city => {
        this.municipalities = this.municipalities.concat(city?.municipalities);
      });
    }else{
      this.municipalities = this.municipalities.concat(city?.municipalities);
    }
  }

}
