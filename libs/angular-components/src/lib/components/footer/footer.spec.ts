import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAppFooter } from "./footer";

let component: GoAAppFooter;
let fixture: ComponentFixture<GoAAppFooter>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAppFooter],
  });
  fixture = TestBed.createComponent(GoAAppFooter);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
