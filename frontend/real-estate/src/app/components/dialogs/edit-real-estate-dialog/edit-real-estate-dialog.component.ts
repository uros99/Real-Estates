import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RealEstateService } from '../../../services/real-estate.service';
import { RealEstate } from '../../../models/real-estate';

@Component({
  selector: 'app-edit-real-estate-dialog',
  templateUrl: './edit-real-estate-dialog.component.html',
  styleUrls: ['./edit-real-estate-dialog.component.scss']
})
export class EditRealEstateDialogComponent implements OnInit {

  public realEstate: RealEstate;
  public states: any[];
  public characteristicsArr: any[];
  public form: FormGroup;
  public editFlag: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditRealEstateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private realEstateService: RealEstateService
  ) { }

  ngOnInit(): void {
    this.realEstate = this.data?.realEstate;
    this.initStates();
    this.initCharacteristics();
    this.form = new FormGroup({
      name : new FormControl(this.realEstate?.name, [Validators.required]),
      city : new FormControl(this.realEstate?.city, [Validators.required]),
      municipality : new FormControl(this.realEstate?.municipality, [Validators.required]),
      microlocation : new FormControl(this.realEstate?.microlocation, [Validators.required]),
      street : new FormControl(this.realEstate?.street, [Validators.required]),
      area : new FormControl(this.realEstate?.area, [Validators.required]),
      rooms : new FormControl(this.realEstate?.rooms, [Validators.required]),
      constructionYear : new FormControl(this.realEstate?.constructionYear, [Validators.required]),
      state : new FormControl(this.realEstate?.state, [Validators.required]),
      heating : new FormControl(this.realEstate?.heating, [Validators.required]),
      floor : new FormControl(this.realEstate?.floor, [Validators.required]),
      totalFloors : new FormControl(this.realEstate?.totalFloors, [Validators.required]),
      parking : new FormControl(this.realEstate?.parking, [Validators.required]),
      monthlyUtilities : new FormControl(this.realEstate?.monthlyUtilities, [Validators.required]),
      price : new FormControl(this.realEstate?.price, [Validators.required]),
      about : new FormControl(this.realEstate?.about, [Validators.required]),
      characteristics : new FormControl(this.realEstate?.characteristics, [Validators.required])
    })
    this.initEditFlag();
  }

  private initEditFlag(){
    const now = new Date();
    if(this.realEstate){
      if(((this.realEstate?.modifyDate?.getTime() / 1000 * 60) < (now.getTime() / 1000 * 60) - 1) ||
          this.realEstate?.modifyDate === null){
        this.editFlag = true;
      }else{
        this.editFlag = false;
      }
    }
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
      {value: 'originally', viewValue: 'Terasa'},
      {value: 'renovated', viewValue: 'Lift'},
      {value: 'lux', viewValue: 'Garaža'},
      {value: 'originally', viewValue: 'Klima'},
      {value: 'renovated', viewValue: 'Internet'},
      {value: 'lux', viewValue: 'Interfon'},
      {value: 'originally', viewValue: 'Telefon'},
    ];
  }

  close(){
    this.dialogRef.close();
  }

  edit(){
    const body = this.form.value;
    body.id = this.realEstate['_id'];
    const now = new Date();
    body.modifyDate = now;
    if(((this.realEstate?.modifyDate?.getTime() / 1000 * 60) < (now.getTime() / 1000 * 60) - 1) ||
          this.realEstate?.modifyDate === null){
      this.editFlag = true;
      this.realEstateService.editRealEstate(body).subscribe((res : any)=>{
        if(res.status === 200){
          this.dialogRef.close({message : 'success'});
        } else {
          this.dialogRef.close({message : 'error'});
        }
      });
    }else{
      this.editFlag = false;
    }
  }

}
