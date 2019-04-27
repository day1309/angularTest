import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(route);
    if(this.auth.isAuthenticated()){
      console.log("auth ok");
      return true;
    }else{
      console.log("no auth");
      this.router.navigate(['/login']);
      return false;
    }
  }

  constructor(private auth: AuthService, private router: Router) { }
}
