import { GoABadgeType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-badge",
  template: `
    <goa-badge 
      [type]="type" 
      [icon]="icon" 
      [arialabel]="ariaLabel" 
      [content]="content"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
    </goa-badge>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABadge {
  @Input() type?: GoABadgeType;
  @Input() content?: string;
  @Input() testId?: string;
  @Input() mt?: string;
  @Input() mb?: string;
  @Input() ml?: string;
  @Input() mr?: string;
}