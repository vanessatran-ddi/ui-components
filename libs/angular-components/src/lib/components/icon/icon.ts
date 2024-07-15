import { GoABIconSize, GoABIconTheme, GoABIconType, Spacing } from "@abgov/ui-components-common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goab-icon",
  template: `
    <goa-icon
      [attr.type]="type"
      [attr.theme]="theme"
      [attr.size]="size"
      [attr.inverted]="inverted"
      [attr.fillcolor]="fillColor"
      [attr.opacity]="opacity"
      [attr.title]="title"
      [attr.arialabel]="ariaLabel"
      [attr.mt]="mt"
      [attr.mb]="mb"
      [attr.ml]="ml"
      [attr.mr]="mr"
      [attr.data-testid]="testId"
    >
    </goa-icon>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoABIcon {
  @Input({ required: true }) type!: GoABIconType;
  @Input() size?: GoABIconSize = "medium";
  @Input() theme?: GoABIconTheme = "outline";
  @Input() inverted?: boolean;
  @Input() fillColor?: string;
  @Input() opacity?: number;
  @Input() title?: string;
  @Input() ariaLabel?: string;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}
