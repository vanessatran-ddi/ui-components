import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoANotificationBanner } from "./notification-banner";

let component: GoANotificationBanner;
let fixture: ComponentFixture<GoANotificationBanner>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoANotificationBanner],
  });
  fixture = TestBed.createComponent(GoANotificationBanner);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
