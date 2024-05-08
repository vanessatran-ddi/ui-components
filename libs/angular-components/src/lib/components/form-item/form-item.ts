import { GoAFormItemLabelSize, GoAFormItemRequirement, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-form-item",
  template: `
    <goa-form-item
      [label]="label"
      [labelsize]="labelSize"
      [helptext]="helpText"
      [error]="error"
      [requirement]="requirement"
      [id]="id"
      [mt]="mt"
      [mb]="mb"
      [mr]="mr"
      [ml]="ml"
    >
      <ng-content />
    </goa-form-item>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAFormItem {
  @Input() label?: string;
  @Input() labelSize?: GoAFormItemLabelSize;
  @Input() helpText?: string;
  @Input() error?: string;
  @Input() requirement?: GoAFormItemRequirement;
  @Input() id?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() mr?: Spacing;
  @Input() ml?: Spacing;
}


