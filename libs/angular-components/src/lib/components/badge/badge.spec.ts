import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoABadge } from "./badge";

let component: GoABadge;
let fixture: ComponentFixture<GoABadge>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoABadge],
  });
  fixture = TestBed.createComponent(GoABadge);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
