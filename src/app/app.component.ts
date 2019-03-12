import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngU2-RajKha';

  constructor (private authService: AuthServiceService) {
    console.log(this.loggedUser);
    this.loggedUser = this.authService.checkIfLoggedIn();
    console.log(this.loggedUser);
  }

  ngOnInit() {
  }

}
