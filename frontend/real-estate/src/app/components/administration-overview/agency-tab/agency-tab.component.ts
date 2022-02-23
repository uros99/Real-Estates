import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AgencyService } from '../../../services/agency.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-agency-tab',
  templateUrl: './agency-tab.component.html',
  styleUrls: ['./agency-tab.component.scss']
})
export class AgencyTabComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private agencyService: AgencyService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      address : new FormControl(null, [Validators.required]),
      city : new FormControl(null, [Validators.required]),
      phoneNumber : new FormControl(null, [Validators.required]),
      pib : new FormControl(null, [Validators.required])
    })
  }

  register(){
    const body = this.form.value;
    this.agencyService.registerAgency(body).subscribe((res)=>{
      this.dialog.open(ConfirmDialogComponent, {data : {text : 'Agency has been added', closeButton : 'OK'}}).afterClosed().subscribe((res)=>{
        this.clearForm();
      });
    })
  }

  private clearForm(){
    this.form.reset();
  }

}
