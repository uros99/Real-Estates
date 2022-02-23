import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  private uri = 'http://localhost:4000/';

  constructor(
    private http : HttpClient
  ) { }

  public getAllAgencies() {
    return this.http.get(`${this.uri}agency/agencies`);
  }

  public getAgency(name: string){
    return this.http.get(`${this.uri}agency/agency-by-name?param=${name}`);
  }

  public registerAgency(body : Agency){
    return this.http.post(`${this.uri}agency/register`, body);
  }
}