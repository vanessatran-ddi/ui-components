import { GoABIconButton } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-icon-button",
  templateUrl: "./icon-button.component.html",
  imports: [
    GoABIconButton,
  ]
})
export class IconButtonComponent {
  constructor() { }

  onClick() {
    console.log('clicked')
  }
}