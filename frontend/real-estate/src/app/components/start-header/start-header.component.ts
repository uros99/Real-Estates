import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-start-header',
  templateUrl: './start-header.component.html',
  styleUrls: ['./start-header.component.scss']
})
export class StartHeaderComponent implements OnInit {

  public user: User;
  constructor(
    private router: Router,
  ) { 
    this.router.events.subscribe((res)=>{
      this.user = JSON.parse(sessionStorage.getItem('user'));
    })
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  signOut(){
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }

}
