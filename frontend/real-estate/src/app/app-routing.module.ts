import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationOverviewComponent } from './components/administration-overview/administration-overview.component';
import { AgentOverviewComponent } from './components/agent-overview/agent-overview.component';
import { BuyerOverviewComponent } from './components/buyer-overview/buyer-overview.component';
import { RealEstateOverviewComponent } from './components/real-estate-overview/real-estate-overview.component';
import { RegisterComponent } from './components/register/register.component';
import { StartOverviewPageComponent } from './components/start-overview-page/start-overview-page.component';

const routes: Routes = [
  {
    path : '',
    component : StartOverviewPageComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'administration',
    component : AdministrationOverviewComponent
  },
  {
    path : 'agent',
    component : AgentOverviewComponent
  },
  {
    path : 'buyer',
    component : BuyerOverviewComponent
  },
  {
    path : 'real-estate/:realEstateId',
    component : RealEstateOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
