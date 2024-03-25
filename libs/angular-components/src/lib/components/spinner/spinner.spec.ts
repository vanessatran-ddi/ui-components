import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASpinner } from "./spinner";

let component: GoASpinner;
let fixture: ComponentFixture<GoASpinner>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASpinner],
  });
  fixture = TestBed.createComponent(GoASpinner);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
