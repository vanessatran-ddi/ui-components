import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAInput } from "./input";

let component: GoAInput;
let fixture: ComponentFixture<GoAInput>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAInput],
  });
  fixture = TestBed.createComponent(GoAInput);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
