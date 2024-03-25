import { GoASpinnerSize, GoASpinnerType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-spinner",
  template: `
    <goa-spinner
      [type]="type"
      [size]="size"
      [invert]="invert"
      [progress]="progress"
      [testid]="testId"
    >
    </goa-spinner>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoASpinner {
  type?: GoASpinnerType;
  size?: GoASpinnerSize;
  invert?: boolean;
  progress?: number;
  testId?: string;
}
