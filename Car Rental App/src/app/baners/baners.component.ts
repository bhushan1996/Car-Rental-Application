import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DashboardService } from 'app/dashboard.service';



declare var $:any;

@Component({
  selector: 'app-baners',
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css']
})
export class BanersComponent implements OnInit {
  
  public cards:any[];

  constructor(private router : Router , private cookieservice : CookieService, private userCard:DashboardService) { }
   cookievalue:any;
  public message="Bangalore";
   
  ngOnInit() {

    $(function() {
      $("#dropLocation a").click(function() {
        console.log("Hey!");
        $("#loc").text($(this).text());
        $("#loc").val($(this).text());
      });
    });

    this.cookievalue = this.cookieservice.get('location');
    
  
  }

  location(){
    this.cookievalue = this.cookieservice.get('location');
    console.log("message is" + this.message);
  }


  myValidation(){
    var a=document.getElementById("loc").innerText;
    
    if(a=="Location"){
      
   alert("Please select the Location");
    }
   else{
    this.router.navigateByUrl('/car');
    
   }
     
    
   }  
    
   


  }


