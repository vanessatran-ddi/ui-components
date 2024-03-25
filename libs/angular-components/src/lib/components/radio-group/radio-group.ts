import { GoARadioGroupOnChangeDetail, GoARadioGroupOrientation } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-radio-group",
  template: `
    <goa-radio-group
      [name]="name"
      [value]="value"
      [disabled]="disabled"
      [orientation]="orientation"
      [testid]="testId"
      [error]="error"
      [arialabel]="ariaLabel"
      (_change)="_onChange($event)"
    >
      <ng-content />
    </goa-radio-group>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoARadioGroup {
  @Input({ required: true }) name!: string;
  @Input() value?: string;
  @Input() disabled?: boolean;
  @Input() orientation?: GoARadioGroupOrientation;
  @Input() testId?: string;
  @Input() error?: boolean;
  @Input() ariaLabel?: string;

  @Output() onChange = new EventEmitter<GoARadioGroupOnChangeDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoARadioGroupOnChangeDetail>).detail;
    this.onChange.emit(detail);
  }
}
