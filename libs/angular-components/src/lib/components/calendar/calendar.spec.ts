import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoACalendar } from "./calendar";

let component: GoACalendar;
let fixture: ComponentFixture<GoACalendar>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoACalendar],
  });
  fixture = TestBed.createComponent(GoACalendar);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
