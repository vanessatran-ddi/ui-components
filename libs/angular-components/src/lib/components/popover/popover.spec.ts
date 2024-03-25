import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAPopover } from "./popover";

let component: GoAPopover;
let fixture: ComponentFixture<GoAPopover>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAPopover],
  });
  fixture = TestBed.createComponent(GoAPopover);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
