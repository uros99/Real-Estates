import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private uri = 'http://localhost:4000/';

  constructor(
    private http : HttpClient
  ) { }

  public getCities(){
    return this.http.get(`${this.uri}location/cities`);
  }

  public getMicrolocations(){
    return this.http.get(`${this.uri}location/microlocations`);
  }

  public getAvgPricePerSquareMeterOnLocationByType(type: string, microlocation: string){
    return this.http.get(`${this.uri}location/avg-price-pet-meter-on-location-by-type?type=${type}&microlocation=${microlocation}`);
  }
}