import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedUser:string;

  constructor() { }

  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  public logIn(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  public logOut() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
