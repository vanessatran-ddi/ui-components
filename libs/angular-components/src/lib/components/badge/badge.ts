import { GoABadgeType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-badge",
  template: `
    <goa-badge 
      [type]="type" 
      [content]="content"
    >
    </goa-badge>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABadge {
  @Input() type?: GoABadgeType;
  @Input() content?: string;
}
