import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

import { ABGovCircularProgressSize, ABGovCircularProgressVariant } from "@abgov/ui-components-common"

@Component({
  standalone: true,
  selector: "abgov-circular-progress",
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
export class ABGovCircularProgress {
  @Input() variant?: ABGovCircularProgressVariant;
  @Input() size?: ABGovCircularProgressSize;
  @Input() message?: string;
  @Input() visible?: boolean;
  @Input() progress?: number;
  @Input() testId?: string;
}

