import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoACallout } from "./callout";

let component: GoACallout;
let fixture: ComponentFixture<GoACallout>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoACallout],
  });
  fixture = TestBed.createComponent(GoACallout);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
