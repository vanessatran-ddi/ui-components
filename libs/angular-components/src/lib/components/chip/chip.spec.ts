import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAChip } from "./chip";

let component: GoAChip;
let fixture: ComponentFixture<GoAChip>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAChip],
  });
  fixture = TestBed.createComponent(GoAChip);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
