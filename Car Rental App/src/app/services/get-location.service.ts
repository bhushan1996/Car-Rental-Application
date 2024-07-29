import { Injectable } from '@angular/core';
import { Locations } from 'app/Bean/location';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  public location:any;
  public _url:string;
  public locality : any;

  constructor(private http:HttpClient,private cookieservice:CookieService) { }
  // getLocation(location: any) {
  //   this.location = this.cookieservice.get('location');
  //   console.log("service " + this.location);
  //   this._url = "http://localhost:8084/locations/" + this.location;
  // }

  getLocationByCity(): Observable<Locations[]> {
    this.location = this.cookieservice.get('location');
    this._url = "http://localhost:8099/locationservice/locations/" + this.location;
      return this.http.get<Locations[]>(this._url);
  }

  setLocality(area :any){
     this.locality = area;
     console.log("inside service set " +  this.locality);
  }

  getLocality(){
    return this.locality;
  }

}

