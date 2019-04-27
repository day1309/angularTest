import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'busqueda',
    component: BusquedaComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
