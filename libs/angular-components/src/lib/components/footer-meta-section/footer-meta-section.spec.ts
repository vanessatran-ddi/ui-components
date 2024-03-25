import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAppFooterMetaSection } from "./footer-meta-section";

let component: GoAAppFooterMetaSection;
let fixture: ComponentFixture<GoAAppFooterMetaSection>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAppFooterMetaSection],
  });
  fixture = TestBed.createComponent(GoAAppFooterMetaSection);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
