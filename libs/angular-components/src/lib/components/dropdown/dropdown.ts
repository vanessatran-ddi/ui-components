import { GoADropdownOnChangeDetail } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-dropdown",
  template: `
    <goa-dropdown 
      [name]="name" 
      [value]="value"
      [label]="label"
      (_change)="_onChange($event)"
    >
      <ng-content />
    </goa-dropdown>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoADropdown {
  @Input() name?: string;
  @Input() value?: string;
  @Input() label?: string;

  @Output() onChange = new EventEmitter<GoADropdownOnChangeDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoADropdownOnChangeDetail>).detail;
    this.onChange.emit(detail)
  }
}
