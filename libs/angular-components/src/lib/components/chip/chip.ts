import { GoAIconType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-chip",
  template: `<goa-chip
    [leadingicon]="leadingIcon"
    [content]="content"
  >
    <ng-content />
  </goa-chip>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAChip {
  @Input() leadingIcon?: GoAIconType | null;
  @Input() content?: string = "";
}

