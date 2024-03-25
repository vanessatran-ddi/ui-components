import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAIconButton } from "./icon-button";

let component: GoAIconButton;
let fixture: ComponentFixture<GoAIconButton>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAIconButton],
  });
  fixture = TestBed.createComponent(GoAIconButton);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
