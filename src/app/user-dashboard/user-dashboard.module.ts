import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

// components
import { UserCountComponent } from './components/user-count/user-count.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

// services
import { UserDashboardService } from './user-dashboard.service';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserCountComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    UserDashboardComponent
  ],
  providers: [
    UserDashboardService
  ]
})
export class UserDashboardModule {}
