import { GoATextAreaCountBy } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

export type GoATextAreaOnChangeDetail = {
  name: string;
  value: string;
}

export type GoATextAreaOnKeyPressDetail = {
  name: string;
  value: string;
  key: string;
}

@Component({
  standalone: true,
  selector: "goax-textarea",
  template: `
    <goa-textarea
      [name]="name"
      [value]="value"
      [id]="id"
      [placeholder]="placeholder"
      [rows]="rows"
      [error]="error"
      [disabled]="disabled"
      [width]="width"
      [testid]="testId"
      [arialabel]="ariaLabel"
      [countby]="countBy"
      [maxcount]="maxCount"
      (_change)="_onChange($event)"
      (_keypress)="_onKeyPress($event)"
    >
    </goa-textarea>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoATextArea {
  @Input({ required: true }) name!: string;
  @Input() value?: string = "";
  @Input() id?: string;
  @Input() placeholder?: string;
  @Input() rows?: number;
  @Input() error?: boolean;
  @Input() disabled?: boolean;
  @Input() width?: string;
  @Input() testId?: string;
  @Input() ariaLabel?: string;
  @Input() countBy?: GoATextAreaCountBy;
  @Input() maxCount?: number;

  @Output() onChange = new EventEmitter<GoATextAreaOnChangeDetail>();
  @Output() onKeyPress = new EventEmitter<GoATextAreaOnKeyPressDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoATextAreaOnChangeDetail>).detail;
    this.onChange.emit(detail)
  }

  _onKeyPress(e: any) {
    const detail = (e as CustomEvent<GoATextAreaOnKeyPressDetail>).detail;
    this.onKeyPress.emit(detail)
  }
}
