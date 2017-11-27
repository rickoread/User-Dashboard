import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.interface';

import { UserDashboardService} from '../../user-dashboard.service';

@Component({
  selector: 'user-dashboard',
  styleUrls: ['user-dashboard.component.scss'],
  template: `
  <div>
    <user-count
      [users]="users">
    </user-count>
    
    <user-detail 
      *ngFor="let user of users;"
      [user]="user"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
    </user-detail>
  </div>
  `
})
export class UserDashboardComponent implements OnInit {
  users: User[];
  constructor(private userService: UserDashboardService ) {}
  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data: User[]) => {
        console.log('Data: ', data);
        this.users = data;
      })
  }

  /**
   * 
   * @param event 
   */
  handleEdit(event: User) {
    this.userService
      .updateUser(event)
      .subscribe((data: User) => {
        this.users = this.users.map((user: User) => {
          if (event.id === user.id) {
            user = Object.assign({}, user, event);
          }
          return user;
        });
      })
  }

  /**
   * 
   * @param event 
   */
  handleRemove(event: User) {
    this.userService
    .removeUser(event)
    .subscribe((data: User) => {
      this.users = this.users.filter((user: User) => event.id !== user.id);
    });
  }
}
