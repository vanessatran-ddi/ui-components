import { GoABBadge } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-badge",
  templateUrl: "./badge.component.html",
  imports: [
    GoABBadge
  ]
})
export class BadgeComponent {
  constructor() { }
}

// FIXME: there is an issue with the `icon` prop binding