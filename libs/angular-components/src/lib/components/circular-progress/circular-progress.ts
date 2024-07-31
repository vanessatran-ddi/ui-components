import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

import { GoABCircularProgressSize, GoABCircularProgressVariant } from "@abgov/ui-components-common"

@Component({
  standalone: true,
  selector: "goab-circular-progress",
  template: `
    <goa-circular-progress
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.message]="message"
      [attr.visible]="visible"
      [attr.progress]="progress"
      [attr.data-testid]="testId"
    >
    </goa-circular-progress>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABCircularProgress {
  @Input() variant?: GoABCircularProgressVariant;
  @Input() size?: GoABCircularProgressSize;
  @Input() message?: string;
  @Input() visible?: boolean;
  @Input() progress?: number;
  @Input() testId?: string;
}
