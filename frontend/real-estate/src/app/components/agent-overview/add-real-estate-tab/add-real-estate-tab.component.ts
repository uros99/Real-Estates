import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Agency } from '../../../models/agency';
import { User } from '../../../models/user';
import { RealEstate } from '../../../models/real-estate';
import { RealEstateService } from '../../../services/real-estate.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { UploadImagesDialogComponent } from '../../dialogs/upload-images-dialog/upload-images-dialog.component';
import { AgencyService } from '../../../services/agency.service';

@Component({
  selector: 'app-add-real-estate-tab',
  templateUrl: './add-real-estate-tab.component.html',
  styleUrls: ['./add-real-estate-tab.component.scss']
})
export class AddRealEstateTabComponent implements OnInit {

  public form: FormGroup;
  public states: any[];
  public characteristicsArr: any[];
  public types: any[];
  public heats: any[];
  public importRealEstate: any;
  public fileToUpload: File | null = null;
  public advertiser = [];
  public images : string[] = [];
  @Input() public user: User;
  @Input() public agency: Agency;

  @Output() listChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(
    private realEstateService: RealEstateService,
    private agencyService: AgencyService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initAdvertiser();
    this.initStates();
    this.initCharacteristics();
    this.initTypes();
    this.initHeats();
    this.initForm();
  }

  private initForm(){
    this.form = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      type : new FormControl(null, [Validators.required]),
      city : new FormControl(null, [Validators.required]),
      municipality : new FormControl(null, [Validators.required]),
      microlocation : new FormControl(null, [Validators.required]),
      street : new FormControl(null, [Validators.required]),
      area : new FormControl(null, [Validators.required]),
      rooms : new FormControl(null, [Validators.required]),
      constructionYear : new FormControl(null, [Validators.required]),
      state : new FormControl(null, [Validators.required]),
      heating : new FormControl(null, [Validators.required]),
      floor : new FormControl(null, [Validators.required]),
      totalFloors : new FormControl(null, [Validators.required]),
      parking : new FormControl(null, [Validators.required]),
      monthlyUtilities : new FormControl(null, [Validators.required]),
      price : new FormControl(null, [Validators.required]),
      about : new FormControl(null, [Validators.required]),
      characteristics : new FormControl(null, [Validators.required]),
      sold : new FormControl(false),
      advertiser : new FormControl(this.advertiser),
      images : new FormControl(null, [Validators.required]),
      modifyDate : new FormControl(null)
    })
  }

  private initAdvertiser(){
    this.agencyService.getAgency(this.user.agency).subscribe((res)=>{
      this.agency = res;
      this.advertiser.push(this.agency);
      this.advertiser.push({
        firstname : this.user.firstname,
        lastname : this.user.lastname,
        phone : this.user.phoneNumber
      });
      this.form.controls?.advertiser.setValue(this.advertiser);
    });
  }

  private initStates(){
    this.states = [
      {value: 'originally', viewValue: 'Originally'},
      {value: 'renovated', viewValue: 'Renovated'},
      {value: 'lux', viewValue: 'LUX'},
    ];
  }

  private initCharacteristics(){
    this.characteristicsArr = [
      {value: 'terasa', viewValue: 'Terasa'},
      {value: 'lift', viewValue: 'Lift'},
      {value: 'garaža', viewValue: 'Garaža'},
      {value: 'klima', viewValue: 'Klima'},
      {value: 'internet', viewValue: 'Internet'},
      {value: 'interfon', viewValue: 'Interfon'},
      {value: 'telefon', viewValue: 'Telefon'},
    ];
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

  private initHeats(){
    this.heats = [
      {value: 'CG', viewValue: 'CG'},
      {value: 'EG', viewValue: 'EG'},
      {value: 'TA', viewValue: 'TA'},
      {value: 'Gas', viewValue: 'Gas'},
      {value: 'Floor heat', viewValue: 'Floor heat'},
      {value: 'Heat pumps', viewValue: 'Heat pumps'},
    ];
  }

  public register(){
    const body = this.form.value;
    body.username = this.user.username;
    this.realEstateService.registerRealEstate(body).subscribe((res)=>{
      this.dialog.open(ConfirmDialogComponent, {data : {text : 'Real Estate has been added', closeButton : 'OK'}}).afterClosed().subscribe((res)=>{
        this.listChange.emit(1);
      });
    });
  }

  uploadImages(){
    this.dialog.open(UploadImagesDialogComponent, {data : {images : this.images}}).afterClosed().subscribe((res)=>{
      this.images = res.images;
      this.form.controls?.images.setValue(this.images);
    })
  }
}
