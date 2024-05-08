import { GoATableVariant, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

type GoATableOnSortDetail = {
  sortBy: string;
  sortDir: number;
}

@Component({
  standalone: true,
  selector: "goax-table",
  template: `
    <goa-table
      [width]="width"
      [variant]="variant"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"

      (_sort)="_onSort($event)"
    >
      <ng-content />
    </goa-table>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoATable {
  @Input() width?: string;
  @Input() variant?: GoATableVariant;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;

  @Output() onSort = new EventEmitter<GoATableOnSortDetail>();

  _onSort(e: Event) {
    const detail = (e as CustomEvent<GoATableOnSortDetail>).detail;
    this.onSort.emit(detail);
  }
}
