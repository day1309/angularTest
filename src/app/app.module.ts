import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

//services
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CountryService } from './services/country.service';
import { ClientsService } from '././services/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusquedaComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, AuthService, AuthGuardService, CountryService, ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
