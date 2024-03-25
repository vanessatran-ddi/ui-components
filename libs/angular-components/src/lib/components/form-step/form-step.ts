import { GoAFormStepStatus } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-form-step",
  template: `
    <goa-form-step
      [text]="text"
      [status]="status"
      [arialabel]="arialabel"
      [childindex]="childindex"
      [enabled]="enabled"
    >
      <ng-content />
    </goa-form-step>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAFormStep {
  @Input() text?: string;
  @Input() status?: GoAFormStepStatus;
  @Input() arialabel?: string;
  @Input() childindex?: string;
  @Input() enabled?: boolean;
}

