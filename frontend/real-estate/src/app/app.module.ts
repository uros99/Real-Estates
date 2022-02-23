import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StartOverviewPageComponent } from './components/start-overview-page/start-overview-page.component';
import { StartHeaderComponent } from './components/start-header/start-header.component';
import { RealEstateDetailsComponent } from './components/real-estate-details/real-estate-details.component';
import { AdministrationOverviewComponent } from './components/administration-overview/administration-overview.component';
import { RegistrationOrderListComponent } from './components/administration-overview/registration-order-list/registration-order-list.component';
import { UserListComponent } from './components/administration-overview/user-list/user-list.component';
import { UserInfoDialogComponent } from './components/dialogs/user-info-dialog/user-info-dialog.component';
import { RegistrationOrderInfoDialogComponent } from './components/dialogs/registration-order-info-dialog/registration-order-info-dialog.component';
import { EditUserDialogComponent } from './components/dialogs/edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { AgencyTabComponent } from './components/administration-overview/agency-tab/agency-tab.component';
import { AgentOverviewComponent } from './components/agent-overview/agent-overview.component';
import { RealEstateListComponent } from './components/agent-overview/real-estate-list/real-estate-list.component';
import { EditRealEstateDialogComponent } from './components/dialogs/edit-real-estate-dialog/edit-real-estate-dialog.component';
import { AddRealEstateTabComponent } from './components/agent-overview/add-real-estate-tab/add-real-estate-tab.component';
import { MyInformationTabComponent } from './components/agent-overview/my-information-tab/my-information-tab.component';
import { ImportRealEstateTabComponent } from './components/agent-overview/import-real-estate-tab/import-real-estate-tab.component';
import { UploadImagesDialogComponent } from './components/dialogs/upload-images-dialog/upload-images-dialog.component';
import { BuyerOverviewComponent } from './components/buyer-overview/buyer-overview.component';
import { FilterRealEstateDialogComponent } from './components/dialogs/filter-real-estate-dialog/filter-real-estate-dialog.component';
import { RealEstateOverviewComponent } from './components/real-estate-overview/real-estate-overview.component';

const globalSettings: RecaptchaSettings = { siteKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU' };
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StartOverviewPageComponent,
    StartHeaderComponent,
    RealEstateDetailsComponent,
    AdministrationOverviewComponent,
    RegistrationOrderListComponent,
    UserListComponent,
    UserInfoDialogComponent,
    RegistrationOrderInfoDialogComponent,
    EditUserDialogComponent,
    ConfirmDialogComponent,
    AgencyTabComponent,
    AgentOverviewComponent,
    RealEstateListComponent,
    EditRealEstateDialogComponent,
    AddRealEstateTabComponent,
    MyInformationTabComponent,
    ImportRealEstateTabComponent,
    UploadImagesDialogComponent,
    BuyerOverviewComponent,
    FilterRealEstateDialogComponent,
    RealEstateOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatStepperModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatChipsModule,
    RecaptchaModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
