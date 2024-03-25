import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoACheckbox } from "./checkbox";

let component: GoACheckbox;
let fixture: ComponentFixture<GoACheckbox>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoACheckbox],
  });
  fixture = TestBed.createComponent(GoACheckbox);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
