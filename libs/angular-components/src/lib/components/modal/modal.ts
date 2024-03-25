import { GoAModalCalloutVariant, GoAModalTransition } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-modal",
  template: `
    <goa-modal
      [calloutvariant]="calloutVariant"
      [open]="open"
      [maxwidth]="maxWidth"
      [closable]="closable"
      [transition]="transition"
      (_close)="_onClose()"
    >
      <ng-content select="[slot=heading]" />
      <ng-content select="[slot=actions]" />
    </goa-modal>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAModal {
  @Input() calloutVariant?: GoAModalCalloutVariant;
  @Input() open?: boolean;
  @Input() maxWidth?: string;
  @Input() closable: boolean = false;
  @Input() transition?: GoAModalTransition

  @Output() onClose = new EventEmitter();

  _onClose() {
    this.onClose.emit();
  }
}
