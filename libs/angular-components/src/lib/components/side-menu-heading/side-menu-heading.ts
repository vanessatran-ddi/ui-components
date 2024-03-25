import { GoAIconType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-side-menu-heading",
  template: `
    <goa-side-menu-heading
      [icon]="icon"
      [meta]="meta"
    >
      <ng-content />
    </goa-side-menu-heading>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoASideMenuHeading {
  @Input() icon!: GoAIconType;
  @Input() meta!: string;
}


