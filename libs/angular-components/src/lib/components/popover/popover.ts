import { GoAPopoverPosition } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-popover",
  template: `
    <goa-popover
      [testid]="testId"
      [maxwidth]="maxWidth"
      [padded]="padded"
      [position]="position"
      [relative]="relative"
    >
      <ng-content />
    </goa-popover>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAPopover {
  @Input() testId?: string;
  @Input() maxWidth?: string;
  @Input() padded?: boolean = true;
  @Input() position?: GoAPopoverPosition;
  @Input() relative?: boolean;
}
