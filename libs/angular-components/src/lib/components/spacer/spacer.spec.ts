import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASpacer } from "./spacer";

let component: GoASpacer;
let fixture: ComponentFixture<GoASpacer>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASpacer],
  });
  fixture = TestBed.createComponent(GoASpacer);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
