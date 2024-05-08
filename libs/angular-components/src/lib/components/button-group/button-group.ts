import { GoAButtonGroupAlignment, GoAButtonGroupGap, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-button-group",
  template: `
    <goa-button-group
      [alignment]="alignment"
      [gap]="gap"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
      <ng-content />
    </goa-button-group>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAButtonGroup {
  @Input() alignment?: GoAButtonGroupAlignment;
  @Input() gap?: GoAButtonGroupGap;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}
