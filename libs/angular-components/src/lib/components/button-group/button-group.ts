import { GoAButtonGroupAlignment, GoAButtonGroupGap } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-button-group",
  template: `
    <goa-button-group
      [alignment]="alignment"
      [gap]="gap"
    >
      <ng-content />
    </goa-button-group>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAButtonGroup {
  @Input() alignment?: GoAButtonGroupAlignment;
  @Input() gap?: GoAButtonGroupGap;
}
