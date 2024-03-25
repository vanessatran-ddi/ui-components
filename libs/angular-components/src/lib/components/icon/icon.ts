import { GoAIconSize, GoAIconTheme, GoAIconType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-icon",
  template: `
    <goa-icon
      [type]="type"
      [size]="size"
      [theme]="theme"
    >
    </goa-icon>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAIcon {
  @Input({ required: true }) type!: GoAIconType;
  @Input() size?: GoAIconSize = "medium";
  @Input() theme?: GoAIconTheme = "outline";
}
