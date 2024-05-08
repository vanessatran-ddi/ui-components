import { Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-divider",
  template: `
    <goa-divider
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"

    >
      <ng-content />
    </goa-divider>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoADivider {
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}
