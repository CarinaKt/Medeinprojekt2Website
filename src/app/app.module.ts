import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { SidenavComponent } from './toolbarWithNav/sidenav/sidenav.component';
import {MatIcon} from "@angular/material/icon";
import {ToolbarWithNavModule} from "./toolbarWithNav/toolbarWithNav.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    FirstPageComponent,
    SecondPageComponent,
    MatIcon,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarWithNavModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
