import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  loggedUser: string;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.loggedUser = this.authService.checkIfLoggedIn();
   }

  ngOnInit() {

  }

  logIn():void {
    if (this.userName === 'Rajib') {
      this.authService.logIn(this.userName);
      this.loggedUser = this.authService.loggedUser;
      if (this.loggedUser ===  'Rajib') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    }
   }

   logOut():void {
     this.authService.logOut();
     this.loggedUser = undefined;
   }

}
