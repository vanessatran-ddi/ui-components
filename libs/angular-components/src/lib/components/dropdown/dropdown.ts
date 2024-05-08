import { GoADropdownOnChangeDetail, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-dropdown",
  template: `
    <goa-dropdown 
      [name]="name" 
      [value]="value"
      [label]="label"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"

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
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;

  @Output() onChange = new EventEmitter<GoADropdownOnChangeDetail>();

  _onChange(e: Event) {
    const detail = (e as CustomEvent<GoADropdownOnChangeDetail>).detail;
    this.onChange.emit(detail)
  }
}
