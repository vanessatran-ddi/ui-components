import { GoAFormStepperOnChangeDetail, GoAFormStepperType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-form-stepper",
  template: `
    <goa-form-stepper
      [step]="step"
      [type]="type"
      (_change)="onchange($event)"
    >
      <ng-content />
    </goa-form-stepper>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAFormStepper {
  @Input() step?: number;
  @Input() type?: GoAFormStepperType;

  @Output() onChange = new EventEmitter<GoAFormStepperOnChangeDetail>();

  onchange(e: Event) {
    const detail = (e as CustomEvent<GoAFormStepperOnChangeDetail>).detail;
    // this.step = detail.step; // TODO: is this needed!!!!!!!!!
    this.onChange.emit(detail);
  }
}
