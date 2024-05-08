import { Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-details",
  template: `
    <goa-details
      [heading]="heading"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"

    >
      <ng-content />
    </goa-details>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoADetails {
  @Input() heading?: string;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}

