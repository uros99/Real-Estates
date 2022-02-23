import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../../services/agency.service';
import { User } from '../../models/user';
import { Agency } from '../../models/agency';

@Component({
  selector: 'app-agent-overview',
  templateUrl: './agent-overview.component.html',
  styleUrls: ['./agent-overview.component.scss']
})
export class AgentOverviewComponent implements OnInit {

  public activeTab = 0;
  public user: User;
  public agency: Agency;

  constructor(
    private agencyService: AgencyService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.agencyService.getAgency(this.user.agency).subscribe((res)=>{
      this.agency = res;
    });
  }

  reload(event){
    window.location.reload();
  }

}
