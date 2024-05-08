import { GoACalendarOnChangeDetail } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-calendar",
  template: `
    <goa-calendar
      [name]="name"
      [value]="value"
      [min]="min"
      [max]="max"
      (_change)="_onChange($event)"
    >
      <ng-content />
    </goa-calendar>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoACalendar {
  name?: string;
  value?: Date;
  min?: Date;
  max?: Date;

  @Output() onChange = new EventEmitter<GoACalendarOnChangeDetail>();

  _onChange(e: Event) {
    const details = (e as CustomEvent<GoACalendarOnChangeDetail>).detail;
    this.onChange.emit(details)
  }
}