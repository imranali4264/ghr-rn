import { Component } from "@angular/core";
import { AuthService } from "../../auth/shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "car-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
