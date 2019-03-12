import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService implements CanActivate {

  authorized: boolean = false;

  constructor(public router: Router) {

  }

  public dashboardGuard(): boolean {
    if (!this.authorized) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
