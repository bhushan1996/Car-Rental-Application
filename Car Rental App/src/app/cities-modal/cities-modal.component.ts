import { Component, OnInit } from '@angular/core';
declare var $ :any;


@Component({
  selector: 'app-cities-modal',
  templateUrl: './cities-modal.component.html',
  styleUrls: ['./cities-modal.component.css']
})
export class CitiesModalComponent implements OnInit {
    public city:any ="Banglore,India";
  constructor() { }
 
  selectBengaluru() {

    this.city="banglore";
    
    console.log("banglore");
    console.log(this.city);
    
    this.focusBengaluru();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusMumbai();
    this.unfocusPune();

  }

  selectMumbai() {
    this.focusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBengaluru();
    this.unfocusPune();

  }

  selectPune() {
    this.focusPune();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBengaluru()
  }

  selectHyderabad(){
    this.focusHyderabad();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusPune();
    this.unfocusBengaluru()

  }

  selectDelhi() {
    this.focusDelhi();
    this.unfocusMumbai();
    this.unfocusHyderabad();
    this.unfocusPune();
    this.unfocusBengaluru()
  }

  focusBengaluru(){
    document.getElementById("bengaluruCity").style.background = "#3aa5c5";
    document.getElementById("bengaluruCity").style.color = "white";
  }
  unfocusBengaluru(){
    document.getElementById("bengaluruCity").style.background = "white";
    document.getElementById("bengaluruCity").style.color = "black";
  }
  focusMumbai(){
    document.getElementById("mumbaiCity").style.background = "#3aa5c5";
    document.getElementById("mumbaiCity").style.color = "white";
  }
  unfocusMumbai(){
    document.getElementById("mumbaiCity").style.background = "white";
    document.getElementById("mumbaiCity").style.color = "black";
  }
  focusPune(){
    document.getElementById("puneCity").style.background = "#3aa5c5";
    document.getElementById("puneCity").style.color = "white";
  }
  unfocusPune(){
    document.getElementById("puneCity").style.background = "white";
    document.getElementById("puneCity").style.color = "black";
  }

  focusDelhi(){
    document.getElementById("delhiCity").style.background = "#3aa5c5";
    document.getElementById("delhiCity").style.color = "white";
  }
  unfocusDelhi(){
    document.getElementById("delhiCity").style.background = "white";
    document.getElementById("delhiCity").style.color = "black";
  }

  focusHyderabad(){
    document.getElementById("hyderabadCity").style.background = "#3aa5c5";
    document.getElementById("hyderabadCity").style.color = "white";
  }
  unfocusHyderabad(){
    document.getElementById("hyderabadCity").style.background = "white";
    document.getElementById("hyderabadCity").style.color = "black";
  }

  closeModal(){
    $('#locationModal').modal('hide');
  }

  ngOnInit() {
    console.log("on location " + this.city);
  }

}
