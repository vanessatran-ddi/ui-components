import { GoACalloutSize, GoACalloutType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-callout",
  template: `
    <goa-callout
      [type]="type"
      [heading]="heading"
      [size]="size"
    >
      <ng-content />
    </goa-callout>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoACallout {
  @Input() type?: GoACalloutType;
  @Input() heading?: string = "";
  @Input() size?: GoACalloutSize;
}

