import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ComponentsModule } from './components/components.module';
import { AppCommonService } from './app-common.service';
import { AppRoutingModule, routes } from './app.routing';
import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CoreModule.forRoot(),
    SharedModule,
    
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //HttpClientModule,
    //FormsModule,
    //ComponentsModule,
    MDBBootstrapModule.forRoot(),
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    // ])
    //AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppCommonService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
