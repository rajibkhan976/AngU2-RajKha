import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { DashboardGuardService } from '../dashboard-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:string = "Dashboard";
  //userList array and two way data binding property defined
  userList: string[] = ['Rajib','Hossain','Khan'];
  addUser:string;

  constructor(private authService: AuthServiceService, private router: Router) {
    authService.loggedUser = this.authService.checkIfLoggedIn();
   }

   ngOnInit() {

   }
   //method for adding user name
   AddUser():void {
       this.userList.unshift(this.addUser);
   }
   //method for removing user name
   RemoveUser():void {
     this.userList.pop();
   }

}
