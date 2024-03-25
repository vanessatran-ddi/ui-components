import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

import { GoACircularProgressSize, GoACircularProgressVariant } from "@abgov/common"

@Component({
  standalone: true,
  selector: "goax-circular-progress",
  template: `<goa-circular-progress
    [variant]="variant"
    [size]="size"
    [message]="message"
    [visible]="visible"
    [progress]="progress"
    [testid]="testId"
  >
    <ng-content />
  </goa-circular-progress>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoACircularProgress {
  @Input() variant?: GoACircularProgressVariant;
  @Input() size?: GoACircularProgressSize;
  @Input() message?: string;
  @Input() visible?: boolean;
  @Input() progress?: number;
  @Input() testId?: string;
}

