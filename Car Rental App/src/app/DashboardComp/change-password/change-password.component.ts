import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GetCarsService } from 'app/services/get-cars.service';
import { DashboardService } from 'app/dashboard.service';
declare var $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ngOnInit(): void {
  }

  isOldPasswordCorrect = true;
  currentPassword = "";
  tempCurrentPassword = ""
  newPassword = "";

  passwordResetForm: FormGroup;
  constructor(private ggetcarService: GetCarsService,private dashboardService:DashboardService) {

  }
  validationHandler(){
    if(this.currentPassword==this.newPassword && this.currentPassword!="" && this.newPassword!="")
      document.getElementById('saveBtn').removeAttribute('disabled')
    else{
      document.getElementById('saveBtn').setAttribute('disabled','true')
    }
  }
  passwordUpdateHandler(newPassword){
    $("#successModal").modal('show');
    this.dashboardService.updateUserPassword(newPassword).subscribe(data=>{
      console.log("Password Updated")
      $("#successModal").modal('show');
    });
  }
}
