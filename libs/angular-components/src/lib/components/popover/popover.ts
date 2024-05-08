import { GoAPopoverPosition, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-popover",
  template: `
    <goa-popover
      [maxwidth]="maxWidth"
      [padded]="padded"
      [position]="position"
      [relative]="relative"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
      <ng-content />
    </goa-popover>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAPopover {
  @Input() maxWidth?: string;
  @Input() padded?: boolean = true;
  @Input() position?: GoAPopoverPosition;
  @Input() relative?: boolean;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}
