import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.interface';

@Component({
  selector: 'user-detail',
  styleUrls: ['user-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="user.hasApp"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="user.firstName"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      
      <div *ngIf="!editing">
        {{ user.firstName }}
      </div>
      
      <div class="date">
        Registered Date: 
        {{ user.registerDate ? (user.registerDate | date: 'yMMMMd' | uppercase) : 'Not registered' }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class UserDetailComponent implements OnChanges {
  @Input()
  user: User;
 
  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();
  
  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  editing: boolean = false;

  ngOnChanges(changes) {
    if (changes.user) {
      this.user = Object.assign({}, changes.user.currentValue)
    }
  }

  constructor() {}

  onNameChange(value) {
    this.user.firstName = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.user);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.user);
  }
}
