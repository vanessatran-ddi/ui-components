import { GoAIconType, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-chip",
  template: `<goa-chip
    [leadingicon]="leadingIcon"
    [content]="content"
    [testid]="testId"
    [mt]="mt"
    [mb]="mb"
    [ml]="ml"
    [mr]="mr"
  >
    <ng-content />
  </goa-chip>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAChip {
  @Input() leadingIcon?: GoAIconType | null;
  @Input() content?: string = "";
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}

