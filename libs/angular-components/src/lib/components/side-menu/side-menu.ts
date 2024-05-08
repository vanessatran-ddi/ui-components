import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-side-menu",
  template: `
    <goa-side-menu
    >
      <ng-content />
    </goa-side-menu>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoASideMenu {
  // nothing
}