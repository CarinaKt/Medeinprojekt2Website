import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {AppComponent} from "./app.component";
import {SecondPageComponent} from "./pages/second-page/second-page.component";

const routes: Routes = [
  { path: '', component: FirstPageComponent},
   { path: 'page', component: SecondPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
