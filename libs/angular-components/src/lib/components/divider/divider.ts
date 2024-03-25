import { Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-divider",
  template: `
    <goa-divider
      [mt]="mt"
      [mb]="mb"
    >
      <ng-content />
    </goa-divider>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoADivider {
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
}
