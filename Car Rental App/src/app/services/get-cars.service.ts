import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../Bean/Car";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  constructor(private http: HttpClient, private cookieService : CookieService) {}

  public id : number;
  public _url2:string;
  public package:any="No-Fuel";

  private _url: string = "http://localhost:8099/carservice/cars";
  private _url3 : string ;
  private _url4 : string;
  private _url5 : string;
  private _url6 : string;
  public city;

  getAllCars(): Observable<Car[]>{
    this._url4 = "http://localhost:8099/carservice/cars";
    return this.http.get<Car[]>(this._url4);
  }

  getCars(): Observable<Car[]> {
    this.city = this.cookieService.get('location');
    console.log("inside get cars method" + this.city);
    this._url = "http://localhost:8099/carservice/cars/list/"+ this.city;
    // this._url = "http://localhost:7070/carservice/"+ this.city;
    return this.http.get<Car[]>(this._url);
  }

  getId(carId: number): Observable<Car> {
    this.id = carId;
    this._url2 = "http://localhost:8099/carservice/cars/" + this.id;
    console.log(this.id);
    return this.http.get<Car>(this._url2);
  }

  getCarById(): Observable<Car> {
    return this.http.get<Car>(this._url2);
  }

  setCarPackage(carPackage : any){
      this.package = carPackage;
      this.getCarPackage();
  }

  getCarPackage(){
      return this.package;
  }

  public getCarsByAvailability(selectedCity : any): Observable<Car[]> {
    this._url3 = "http://localhost:8099/carservice/cars/available/"+selectedCity;
        return this.http.get<Car[]>(this._url3);
  }

  addCar(car: Car) : Observable<Boolean>{
    let url: string = "http://localhost:8099/carservice/cars";
    return this.http.post<Boolean>(url, car);
  }
  
  deleteCar(carId: number): Observable<any> {
    console.log("inside delete car" + carId);
    this._url5 = "http://localhost:8099/carservice/cars/"+carId+"/id";
    return this.http.delete<any>(this._url5);
  }

  editCar(carId :any, car :Car) : Observable<any>{
    this._url6 = "http://localhost:8099/carservice/cars/"+carId;
    return this.http.put<any>(this._url6, car);
  }
}
