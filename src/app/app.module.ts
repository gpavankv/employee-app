import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import {DataBindingChildComponent} from './db-child/db-child.component';
import { OperationsComponent } from './operations/operations.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import { TestComponent } from './operations/test/test.component';
import { OpHeaderComponent } from './operations/op-header/op-header.component';
import { AppRoutingModule } from './app.routing';
import { ReadComponent } from './operations/read/read.component';
import { CreateComponent } from './operations/create/create.component';
import { UpdateComponent } from './operations/update/update.component';
import { DeleteComponent } from './operations/delete/delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from './services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DataBindingComponent,
    DataBindingChildComponent,
    OperationsComponent,
    TestComponent,
    OpHeaderComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
