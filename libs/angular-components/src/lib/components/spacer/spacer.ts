import { GoASpacerHorizontalSpacing, GoASpacerVerticalSpacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-spacer",
  template: `
    <goa-spacer
      [hspacing]="hSpacing"
      [vspacing]="vSpacing"
    >
    </goa-spacer>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoASpacer {
  @Input() hSpacing?: GoASpacerHorizontalSpacing;
  @Input() vSpacing?: GoASpacerVerticalSpacing;
}

