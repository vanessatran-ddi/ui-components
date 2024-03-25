import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAIcon } from "./icon";

let component: GoAIcon;
let fixture: ComponentFixture<GoAIcon>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAIcon],
  });
  fixture = TestBed.createComponent(GoAIcon);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
