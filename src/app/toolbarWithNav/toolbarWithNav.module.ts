import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatButton} from "@angular/material/button";
import {MatDrawer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MatButton,
    MatDrawer,
    MatIcon,
    MatToolbar
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class ToolbarWithNavModule { }
