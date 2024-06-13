import { GoABTextAreaCountBy, GoABTextAreaOnChangeDetail, GoABTextAreaOnKeyPressDetail, Spacing } from "@abgov/ui-components-common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  standalone: true,
  selector: "goab-textarea",
  template: `
    <goa-textarea
      [attr.name]="name"
      [attr.value]="value"
      [attr.id]="id"
      [attr.placeholder]="placeholder"
      [attr.rows]="rows"
      [attr.error]="error"
      [attr.disabled]="disabled"
      [attr.width]="width"
      [attr.arialabel]="ariaLabel"
      [attr.countby]="countBy"
      [attr.maxcount]="maxCount"
      [attr.testid]="testId"
      [attr.mt]="mt"
      [attr.mb]="mb"
      [attr.ml]="ml"
      [attr.mr]="mr"
      (_change)="_onChange($event)"
      (_keyPress)="_onKeyPress($event)"
    >
    </goa-textarea>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => GoABTextArea),
    }
  ]
})
export class GoABTextArea implements ControlValueAccessor {
  @Input() name?: string;
  @Input() value?: string = "";
  @Input() id?: string;
  @Input() placeholder?: string;
  @Input() rows?: number;
  @Input() error?: boolean;
  @Input() disabled?: boolean;
  @Input() width?: string;
  @Input() ariaLabel?: string;
  @Input() countBy?: GoABTextAreaCountBy = "";
  @Input() maxCount?: number = -1;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;

  @Output() onChange = new EventEmitter<GoABTextAreaOnChangeDetail>();
  @Output() onKeyPress = new EventEmitter<GoABTextAreaOnKeyPressDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoABTextAreaOnChangeDetail>).detail;
    this.onChange.emit(detail)
    this.markAsTouched();
    this.fcChange?.(detail.value);
  }

  _onKeyPress(e: Event) {
    const detail = (e as CustomEvent<GoABTextAreaOnKeyPressDetail>).detail;
    this.markAsTouched();
    this.onKeyPress.emit(detail)
  }

  // ControlValueAccessor

  private fcChange?: (value: string) => void;
  private fcTouched?: () => {};
  touched = false;

  markAsTouched() {
    if (!this.touched) {
      this.fcTouched?.();
      this.touched = true;
    }
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.fcChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.fcTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
