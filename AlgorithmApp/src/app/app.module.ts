import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatSelectModule
} from "@angular/material";
import { NgForm } from "@angular/forms";
import 'hammerjs';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TestComponent } from './Components/test/test.component';
import { myRoutes } from "./app.routers";
import { ZipcodeComponent } from './Components/zipcode/zipcode.component';
import {ZipcodeService} from "./HttpService/zipcodeservice.service";
import { HttpModule} from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NgForm,
    HomeComponent,
    TestComponent,
    ZipcodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    myRoutes,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ZipcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
