import { GoABCalloutSize, GoABCalloutType, Spacing } from "@abgov/ui-components-common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goab-callout",
  template: `
    <goa-callout
      [attr.type]="type"
      [attr.heading]="heading"
      [attr.size]="size"
      [attr.testid]="testId"
      [attr.mt]="mt"
      [attr.mb]="mb"
      [attr.ml]="ml"
      [attr.mr]="mr"
    >
      <ng-content />
    </goa-callout>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABCallout {
  @Input() type?: GoABCalloutType;
  @Input() heading?: string = "";
  @Input() size?: GoABCalloutSize;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}

