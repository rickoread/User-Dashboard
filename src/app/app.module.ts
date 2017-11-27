import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UserDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
