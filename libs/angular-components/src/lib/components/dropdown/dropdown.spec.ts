import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoADropdown } from "./dropdown";

let component: GoADropdown;
let fixture: ComponentFixture<GoADropdown>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoADropdown],
  });
  fixture = TestBed.createComponent(GoADropdown);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
