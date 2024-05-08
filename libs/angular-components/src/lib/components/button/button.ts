import { GoAButtonSize, GoAButtonType, GoAButtonVariant, GoAIconType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-button",
  template: `
    <goa-button 
      [type]="type"
      [size]="size"
      [variant]="variant"
      [disabled]="disabled"
      [leadingicon]="leadingIcon"
      [trailingicon]="trailingIcon"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
      (_click)="_onClick($event)"
    >
      <ng-content />
    </goa-button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAButton {
  @Input() type?: GoAButtonType;
  @Input() size?: GoAButtonSize;
  @Input() variant?: GoAButtonVariant;
  @Input() disabled?: boolean;
  @Input() leadingIcon?: GoAIconType;
  @Input() trailingIcon?: GoAIconType;
  @Input() testId?: string;
  @Input() mt?: string;
  @Input() mb?: string;
  @Input() ml?: string;
  @Input() mr?: string;

  @Output() onClick = new EventEmitter();

  _onClick(_: any) {
    this.onClick.emit();
  }
}