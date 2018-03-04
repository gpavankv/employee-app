import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  isAuth = false;
  constructor(private httpService: HttpService, private router: Router) {}
  // canActivate(): boolean {
  //   if (this.httpService.logged === true) {
  //     this.isAuth = true;
  //   } else {
  //     this.isAuth = false;
  //   }
  //   return this.isAuth;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.httpService.logged === true) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.canActivate(route, state);
  }
}
