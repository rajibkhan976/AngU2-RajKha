import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  //Input properties are defined
  @Input() singleUser:string;
  @Input() listItemColor: any;

  constructor(private route: ActivatedRoute, private router: Router) {

   }

   ngOnInit() {
   }

   navigate(): void {
     this.router.navigate(['/single-user', this.singleUser]);
   }

}
