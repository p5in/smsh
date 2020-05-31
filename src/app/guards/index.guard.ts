import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class IndexGuard implements CanActivate {
  constructor(public router: Router, private storage: Storage) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // console.log(route);

    let authInfo = {
      authenticated: false,
    };
    let tokenValue;
    // let tokenValue = localStorage.getItem("token");

    this.storage.get("token").then((val) => {
      console.log("Your token", val);
      tokenValue = val;
      if (tokenValue) {
        authInfo.authenticated = true;
      }
      if (authInfo.authenticated) {
        this.router.navigate(["home/feed"]);
        return false;
      }
    });

    return true;
  }
}
