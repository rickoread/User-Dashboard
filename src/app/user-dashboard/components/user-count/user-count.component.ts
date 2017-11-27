import { Component, Input } from '@angular/core';

import { User } from '../../models/user.interface';

@Component({
  selector: 'user-count',
  template: `
    <div>
      <h1>Users</h1>
      Have app: {{ haveAppCount() }} / {{ users?.length }}
    </div>
  `
})
export class UserCountComponent {
  @Input()
  users: User[];

  constructor() {}

  haveAppCount(): number {
    if (!this.users) return;
    return this.users.filter((user: User) => user.hasApp).length;
  }
}
