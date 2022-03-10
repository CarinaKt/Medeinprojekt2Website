import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class ToolbarWithNavModule { }
