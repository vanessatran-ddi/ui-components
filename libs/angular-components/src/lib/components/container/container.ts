import { GoAContainerAccent, GoAContainerPadding, GoAContainerType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-container",
  template: `<goa-container
    [type]="type"
    [accent]="accent"
    [padding]="padding"
  >
    <ng-content />
  </goa-container>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAContainer {
  @Input() type?: GoAContainerType;
  @Input() accent?: GoAContainerAccent;
  @Input() padding?: GoAContainerPadding;
}

