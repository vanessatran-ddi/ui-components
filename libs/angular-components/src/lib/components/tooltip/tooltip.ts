import { GoATooltipHorizontalAlignment, GoATooltipPosition } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-tooltip",
  template: `
    <goa-tooltip
      [position]="position"
      [content]="content"
      [halign]="hAlign"
      [testid]="testId"
    >
      <ng-content /> 
    </goa-tooltip>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoATooltip {
  @Input() position?: GoATooltipPosition;
  @Input() content?: string;
  @Input() hAlign?: GoATooltipHorizontalAlignment;
  @Input() testId?: string;
}

