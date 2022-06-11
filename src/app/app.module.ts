import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { MatIconModule} from "@angular/material/icon";
import {ToolbarWithNavModule} from "./toolbarWithNav/toolbarWithNav.module";
import {CommonModule} from "@angular/common";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    FirstPageComponent,
    SecondPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarWithNavModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
