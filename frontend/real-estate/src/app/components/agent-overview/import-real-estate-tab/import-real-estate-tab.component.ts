import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../models/user';
import { RealEstate } from '../../../models/real-estate';
import { RealEstateService } from '../../../services/real-estate.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-import-real-estate-tab',
  templateUrl: './import-real-estate-tab.component.html',
  styleUrls: ['./import-real-estate-tab.component.scss']
})
export class ImportRealEstateTabComponent implements OnInit {

  public isLinear = false;
  public form: FormGroup;
  public states: any[];
  public characteristicsArr: any[];
  public heats: any[];
  public types: any[];
  public importRealEstate: any;
  public fileToUpload: File | null = null;
  public images: string[] = [];
  public numOfUploadImages: number = 0;
  public message: string;
  public advertiser = [];

  @Input() public user: User;
  @Output() listChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private realEstateService: RealEstateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initStates();
    this.initCharacteristics();
    this.initHeats();
    this.initTypes();
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
      advertiser : new FormControl(null),
      images : new FormControl(null, [Validators.required]),
      modifyDate : new FormControl(null)
    })
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
      {value: 'garaza', viewValue: 'Garaza'},
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

  public onFileChanged(file) {
    this.fileToUpload = file.target.files.item(0);
    if(this.fileToUpload){
      const value = this.fileToUpload.text().then((stringArr)=>{
        this.importRealEstate = JSON.parse(stringArr)?.realestate;
        this.advertiser = JSON.parse(stringArr)?.advertiser;
        this.snackBar.open('Document imported', null, {
          duration : 4000
        });
        this.setFormGroupRealEstate();
      });
    }
  }

  private setFormGroupRealEstate(){
    this.form.controls?.name.setValue(this.importRealEstate?.name);
    this.form.controls?.city.setValue(this.importRealEstate?.city);
    this.form.controls?.municipality.setValue(this.importRealEstate?.municipality);
    this.form.controls?.microlocation.setValue(this.importRealEstate?.microlocation);
    this.form.controls?.street.setValue(this.importRealEstate?.street);
    this.form.controls?.area.setValue(parseInt(this.importRealEstate?.area, 10));
    this.form.controls?.rooms.setValue(parseInt(this.importRealEstate?.rooms, 10));
    this.form.controls?.constructionYear.setValue(new Date(parseInt(this.importRealEstate?.constructionYear, 10)));
    this.form.controls?.state.setValue(this.importRealEstate?.state);
    this.form.controls?.heating.setValue(this.importRealEstate?.heating);
    this.form.controls?.floor.setValue(parseInt(this.importRealEstate?.floor));
    this.form.controls?.totalFloors.setValue(parseInt(this.importRealEstate?.totalFloors));
    this.form.controls?.parking.setValue(this.importRealEstate?.parking === 'YES' ? true : false);
    this.form.controls?.monthlyUtilities.setValue(parseInt(this.importRealEstate?.monthlyUtilities, 10));
    this.form.controls?.price.setValue(parseInt(this.importRealEstate?.price, 10));
    this.form.controls?.about.setValue(this.importRealEstate?.about);
    this.form.controls?.characteristics.setValue(this.importRealEstate?.characteristics);
    this.form.controls?.type.setValue(this.importRealEstate?.type);
    this.form.controls?.advertiser.setValue(this.advertiser);
  }

  import(){
    const body = this.form.value;
    body.username = this.user.username;
    this.realEstateService.registerRealEstate(body).subscribe((res)=>{
      this.dialog.open(ConfirmDialogComponent, {data : {text : 'Real Estate has been added', closeButton : 'OK'}}).afterClosed().subscribe((res)=>{
        this.listChange.emit(1);
      });
    });
  }

  importImages(event){
    if (event.target.files && event.target.files[0]) {
      this.numOfUploadImages += event.target.files.length;
      if(this.numOfUploadImages < 3 || this.numOfUploadImages > 6){
        this.message = 'You need to upload at least 3 images, but not more than 6';
      }else{
        this.message = '';
      }
      for (let i = 0; i <  this.numOfUploadImages; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);
          this.form.controls?.images.setValue(this.images);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }

  clear(){
    this.images = [];
    this.numOfUploadImages = 0;
    this.message = 'You need to upload at least 3 images, but not more than 6';
  }


}
