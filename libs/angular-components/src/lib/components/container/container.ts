import { GoAContainerAccent, GoAContainerPadding, GoAContainerType, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-container",
  template: `<goa-container
    [type]="type"
    [accent]="accent"
    [padding]="padding"
    [testid]="testId"
    [mt]="mt"
    [mb]="mb"
    [ml]="ml"
    [mr]="mr"

  >
    <ng-content />
  </goa-container>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAContainer {
  @Input() type?: GoAContainerType;
  @Input() accent?: GoAContainerAccent;
  @Input() padding?: GoAContainerPadding;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}

