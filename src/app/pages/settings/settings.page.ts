import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  displayUserData: any;

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    // this.displayUserData = localStorage.getItem("token");

    this.storage.get("token").then((val) => {
      console.log("Your age is", val);
      this.displayUserData = val;
    });
  }

  logoutAction() {
    // window.localStorage.removeItem(this.displayUserData);
    // localStorage.removeItem(key);
    // localStorage.clear();
    this.storage.remove("token");
    console.log("hello world");
    // this.storageService.removeStorageItem(AuthConstants.AUTH).then((res) => {
    //   this.userData$.next("");
    this.router.navigate(["login"]);
  }
}
