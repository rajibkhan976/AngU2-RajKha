import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  //output property defined
  @Output() onChangeAdd = new EventEmitter<string[]>();
  @Output() onChangeRemove = new EventEmitter<string[]>();

  constructor() { }
  //method for output event emitter to add user
  onClickedAdd () {
    this.onChangeAdd.emit();
  }
  //method for output event emitter to remove user
  onClickedRemove () {
    this.onChangeRemove.emit();
  }

}
