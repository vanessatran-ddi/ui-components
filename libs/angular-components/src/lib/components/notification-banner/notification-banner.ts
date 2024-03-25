import { GoAAriaLiveType, GoANotificationType } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-notification",
  template: `
    <goa-notification
      [type]="type"
      [arialive]="ariaLive"
      [maxcontentwidth]="maxContentWidth"
      [testid]="testId"
      (_dismiss)="_onDismiss()"
    >
      <ng-content />
    </goa-notification>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoANotificationBanner {
  @Input() type?: GoANotificationType;
  @Input() ariaLive?: GoAAriaLiveType;
  @Input() maxContentWidth?: string;
  @Input() testId?: string;

  @Output() onDismiss = new EventEmitter();

  _onDismiss() {
    this.onDismiss.emit();
  }
}
