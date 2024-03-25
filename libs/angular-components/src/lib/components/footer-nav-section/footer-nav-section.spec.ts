import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAppFooterNavSection } from "./footer-nav-section";

let component: GoAAppFooterNavSection;
let fixture: ComponentFixture<GoAAppFooterNavSection>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAppFooterNavSection],
  });
  fixture = TestBed.createComponent(GoAAppFooterNavSection);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
