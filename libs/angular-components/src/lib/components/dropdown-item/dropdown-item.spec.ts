import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoADropdownItem } from "./dropdown-item";

let component: GoADropdownItem;
let fixture: ComponentFixture<GoADropdownItem>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoADropdownItem],
  });
  fixture = TestBed.createComponent(GoADropdownItem);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
