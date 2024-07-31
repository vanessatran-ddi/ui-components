import { GoABButton, GoABDetails } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-detail",
  templateUrl: "./detail.html",
  imports: [
    GoABDetails,
    GoABButton,
  ]
})
export class DetailComponent {
  isOpen1 = true;
  constructor() { }
  toggle() {
    this.isOpen1 = !this.isOpen1;
  }
}