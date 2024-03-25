import { GoADatePickerOnChangeDetail } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-datepicker",
  template: `
    <goa-date-picker 
      [name]="name" 
      [value]="value" 
      [min]="min" 
      [max]="max" 
      (_change)="_onChange($event)"
    >
    </goa-date-picker>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoADatePicker {
  @Input() name?: string;
  @Input() value?: Date | string;
  @Input() min?: Date | string;
  @Input() max?: Date | string;
  @Output() onChange = new EventEmitter<GoADatePickerOnChangeDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoADatePickerOnChangeDetail>).detail;
    this.onChange.emit(detail)
  }
}
