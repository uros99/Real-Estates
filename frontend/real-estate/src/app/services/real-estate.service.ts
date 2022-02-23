import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/real-estate';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  private uri = 'http://localhost:4000/';

  constructor(
    private http : HttpClient
  ) { }

  public getMyRealEstates(username: string){
    return this.http.get(`${this.uri}real-estate/real-estate-username?param=${username}`);
  }

  public getAllRealEstates() {
    return this.http.get(`${this.uri}real-estate/real-estates`);
  }

  public getRealEstate(id){
    return this.http.get(`${this.uri}real-estate/real-estate-id?param=${id}`);
  }

  public getUnSoldRealEstates(){
    return this.http.get(`${this.uri}real-estate/unsold-real-estates`);
  }

  public registerRealEstate(body: RealEstate){
    return this.http.post(`${this.uri}real-estate/register`, body);
  }

  public editRealEstate(body: any){
    return this.http.post(`${this.uri}real-estate/edit`, body);
  }

  public sellRealEstate(body: any){
    return this.http.post(`${this.uri}real-estate/sell`, body);
  }

  public searchRealEstate(body: any){
    return this.http.post(`${this.uri}real-estate/search`, body);
  }
}
