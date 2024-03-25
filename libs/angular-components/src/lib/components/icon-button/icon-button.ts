import { GoAIconButtonVariant, GoAIconSize, GoAIconType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-icon-button",
  template: `
    <goa-icon-button
      [icon]="icon"
      [size]="size"
      [variant]="variant"
      [title]="title"
      [disabled]="disabled"
      (onClick)="_onClick($event)"
    >
    </goa-icon-button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAIconButton {
  @Input() icon?: GoAIconType;
  @Input() size?: GoAIconSize = "medium";
  @Input() variant?: GoAIconButtonVariant;
  @Input() title?: string;
  @Input() disabled?: boolean;

  @Output() onClick = new EventEmitter();

  _onClick(_: any) {
    this.onClick.emit()
  }
}
