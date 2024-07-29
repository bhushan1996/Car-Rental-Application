import { UserService } from "app/services/user.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  AfterViewInit,
  Output,
  EventEmitter,
  Inject
} from "@angular/core";
import { MapsAPILoader, MouseEvent } from "@agm/core";
import { LoginService } from "app/services/login.service";
import { CitiesModalComponent } from "app/cities-modal/cities-modal.component";
import { CookieService } from "ngx-cookie-service";
import { GetLocationService } from "app/services/get-location.service";
import { LOCAL_STORAGE, WebStorageService } from "angular-webstorage-service";

// import {} from '@types/googlemaps';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  //  ngAfterViewInit() {
  //   this.cities = this.citiesModal.city;
  //   console.log("on init" + this.cities);
  // }

  //Sign up Code
  signUpEmail;
  signUpName;
  signUpMobile;
  signUpPassword;
  signUpRePassword;
  var = false;

  isEmailValid: boolean = true;

  validateEmail() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signUpEmail)
    ) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  //Sign Up Code End

  //Login Code

  isLoginValid: boolean;
  isLoginPasswordValid: boolean;

  validateLoginEmail() {
    let email = (<HTMLInputElement>document.getElementById("loginEmail")).value;
    console.log("hello" + email);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.isLoginValid = true;
    } else {
      this.isLoginValid = false;
    }
  }

  validatePassword() {
    let password = (<HTMLInputElement>document.getElementById("loginPassword"))
      .value;
    if (password.length > 0) {
      this.isLoginPasswordValid = true;
    } else {
      this.isLoginPasswordValid = false;
    }
  }

  //

  loginState: boolean;
  dislplayNav = false;
  city: any = "Bangalore";
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;

  private geoCoder;
  cookievalue: any;
  public userData: any = [];

  @Output() public childEvent = new EventEmitter();

  @ViewChild("search", { read: true, static: false })
  public searchElementRef: ElementRef;

  @ViewChild(CitiesModalComponent, { static: false })
  citiesModal: CitiesModalComponent;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private loginServ: LoginService,
    private cookieservice: CookieService,
    private userService: UserService,
    private locationService: GetLocationService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {}
  saveInLocal(key, val): void {
    console.log("recieved= key:" + key + "value:" + val);
    this.storage.set(key, val);
    this.userData[key] = this.storage.get(key);
  }

  getFromLocal(key): any {
    console.log("recieved= key:" + key);
    return this.storage.get(key);
  }
  displaySideNavbar() {
    console.log(this.dislplayNav);
    if (this.dislplayNav) this.dislplayNav = false;
    else this.dislplayNav = true;
  }

  isLoggedIn() {
    let status = this.getFromLocal("loginStatus");
    if (status == true) {
      this.loginState = true;
    } else {
      this.loginState = false;
    }
  }

  ngOnInit() {
    this.loginState = this.storage.get("loginStatus");
    this.cookieservice.set("location", this.city);
    this.cookievalue = this.cookieservice.get("location");
    console.log("cookied " + this.cookievalue);
    document.getElementById("displaysidebtn").hidden = true;
  //   this.mapsAPILoader.load().then(() => {
  //     this.setCurrentLocation();
  //     this.geoCoder = new google.maps.Geocoder();

  //     let autocomplete = new google.maps.places.Autocomplete(
  //       this.searchElementRef.nativeElement,
  //       {
  //         types: ["address"]
  //       }
  //     );
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }

  //         //set latitude, longitude and zoom
  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //       });
  //     });
  //   });
  // }
  // private setCurrentLocation() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //       this.getAddress(this.latitude, this.longitude);
  //     });
  //   }
  // }

  // markerDragEnd($event: MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode(
  //     { location: { lat: latitude, lng: longitude } },
  //     (results, status) => {
  //       console.log(results);
  //       console.log(status);
  //       if (status === "OK") {
  //         if (results[0]) {
  //           this.zoom = 12;
  //           this.address = results[0].formatted_address;
  //         } else {
  //           window.alert("No results found");
  //         }
  //       } else {
  //         window.alert("Geocoder failed due to: " + status);
  //       }
  //     }
  //   );
  }
  selectBangalore() {
    this.city = "Bangalore";
    this.focusBangalore();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusMumbai();
    this.unfocusPune();
    this.cookieservice.set("location", this.city);
    this.childEvent.emit(this.city);
  }

  selectMumbai() {
    this.city = "Mumbai";
    this.focusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBangalore();
    this.unfocusPune();
    this.cookieservice.set("location", this.city);
    this.childEvent.emit(this.city);
  }

  selectPune() {
    this.city = "Pune";
    this.focusPune();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBangalore();
    this.cookieservice.set("location", this.city);
    this.childEvent.emit(this.city);
  }

  selectHyderabad() {
    this.city = "Hyderabad";
    this.focusHyderabad();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusPune();
    this.unfocusBangalore();
    this.cookieservice.set("location", this.city);
    this.childEvent.emit(this.city);
  }

  selectDelhi() {
    this.city = "Delhi";
    this.focusDelhi();
    this.unfocusMumbai();
    this.unfocusHyderabad();
    this.unfocusPune();
    this.unfocusBangalore();
    this.cookieservice.set("location", this.city);
    this.childEvent.emit(this.city);
  }

  focusBangalore() {
    document.getElementById("BangaloreCity").style.background = "#3aa5c5";
    document.getElementById("BangaloreCity").style.color = "white";
  }
  unfocusBangalore() {
    document.getElementById("BangaloreCity").style.background = "white";
    document.getElementById("BangaloreCity").style.color = "black";
  }
  focusMumbai() {
    document.getElementById("mumbaiCity").style.background = "#3aa5c5";
    document.getElementById("mumbaiCity").style.color = "white";
  }
  unfocusMumbai() {
    document.getElementById("mumbaiCity").style.background = "white";
    document.getElementById("mumbaiCity").style.color = "black";
  }
  focusPune() {
    document.getElementById("puneCity").style.background = "#3aa5c5";
    document.getElementById("puneCity").style.color = "white";
  }
  unfocusPune() {
    document.getElementById("puneCity").style.background = "white";
    document.getElementById("puneCity").style.color = "black";
  }

  focusDelhi() {
    document.getElementById("delhiCity").style.background = "#3aa5c5";
    document.getElementById("delhiCity").style.color = "white";
  }
  unfocusDelhi() {
    document.getElementById("delhiCity").style.background = "white";
    document.getElementById("delhiCity").style.color = "black";
  }

  focusHyderabad() {
    document.getElementById("hyderabadCity").style.background = "#3aa5c5";
    document.getElementById("hyderabadCity").style.color = "white";
  }
  unfocusHyderabad() {
    document.getElementById("hyderabadCity").style.background = "white";
    document.getElementById("hyderabadCity").style.color = "black";
  }

  closeModal() {
    $("#locationModal").modal("hide");
  }
  loginModalMsgToggle() {
    $("#loginModalMsg").modal("toggle");
  }
  closeSignupModal() {
    $("#signUpModal").modal("hide");
  }
  openSignupModal() {
    $("#signUpModal").modal("toggle");
  }

  closeLoginModal() {
    $("#myModal").modal("hide");
  }
  openLoginModal() {
    $("#SignUpMsg").modal("hide");
    $("#myModal").modal("toggle");
  }
  result;
  createNewUser() {
    let fullName = (<HTMLInputElement>document.getElementById("signUpName"))
      .value;
    console.log("fullname:" + fullName);
    let email = (<HTMLInputElement>document.getElementById("signUpEmail"))
      .value;
    let phone = (<HTMLInputElement>document.getElementById("signUpMobile"))
      .value;
    let password = (<HTMLInputElement>document.getElementById("signUpPassword"))
      .value;
    let passwordReEnter = (<HTMLInputElement>(
      document.getElementById("signUpPasswordEnter")
    )).value;

    let user = {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
      backLicenseImageUrl: null,
      frontLicenseImageUrl: null,
      userId: null
    };

    this.userService.adduser(user).subscribe(data => {
      this.result = data;
      $("#SignUpMsg").modal("toggle");
    });
    this.closeSignupModal();
  }

  loginResult: Boolean;
  userLogin() {
    let email = (<HTMLInputElement>document.getElementById("loginEmail")).value;

    let password = (<HTMLInputElement>document.getElementById("loginPassword"))
      .value;

    let user = {
      fullName: null,
      email: email,
      phone: null,
      password: password,
      backLicenseImageUrl: null,
      frontLicenseImageUrl: null,
      userId: null
    };

    this.userService.userLogin(user).subscribe(data => {
      this.loginResult = data;
      console.log("login:" + this.loginResult);
      if (this.loginResult == true) {
        this.saveInLocal("email", email);
        this.saveInLocal("loginStatus", this.loginResult);
      }
      this.isLoggedIn();
      this.closeSignupModal();
      this.closeLoginModal();
      this.loginModalMsgToggle();
      this.userService.getUserId().subscribe(data=>{
        this.saveInLocal("userId",data);
      })
    });
  }
  hideSideNavbar() {
    this.dislplayNav = false;
  }
}
