import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "./account.service";

@Injectable()
export class CanActivateTeam implements CanActivate {

  constructor(
      private accountService: AccountService,
      public router: Router
  ) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.accountService.onLoginSuccess.map(e => {
        if(e) return true;
        else {
          this.router.navigate(['/']);
          return false;
        }
      }).take(1);;
  }
}