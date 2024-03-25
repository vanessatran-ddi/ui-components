import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAButton } from "./button";

let component: GoAButton;
let fixture: ComponentFixture<GoAButton>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAButton],
  });
  fixture = TestBed.createComponent(GoAButton);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
