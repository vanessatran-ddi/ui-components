import { GoABlockAlignment, GoABlockDirection, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-block",
  template: `
    <goa-block 
      [gap]="gap"
      [direction]="direction"
      [alignment]="alignment"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
      <ng-content />
    </goa-block>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABlock {
  @Input() gap?: Spacing;
  @Input() direction?: GoABlockDirection;
  @Input() alignment?: GoABlockAlignment;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}
