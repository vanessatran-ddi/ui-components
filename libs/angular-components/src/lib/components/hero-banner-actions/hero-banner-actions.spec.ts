import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAHeroBannerActions } from "./hero-banner-actions";

let component: GoAHeroBannerActions;
let fixture: ComponentFixture<GoAHeroBannerActions>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAHeroBannerActions],
  });
  fixture = TestBed.createComponent(GoAHeroBannerActions);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
