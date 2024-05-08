import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAccordion } from "./accordion";
import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

let component: GoAAccordion;
let fixture: ComponentFixture<GoAAccordion>;

@Component({
  template: `
    <goa-accordion [heading]="heading" [headingsize]="headingSize">
      test content
    </goa-accordion>`
})
class TestAccordionComponent {
  heading: string = "Heading";
  headingSize: string = "medium";
}

describe("Accordion", () => {
  let fixture: ComponentFixture<TestAccordionComponent>;
  let accordion;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, GoAAccordion],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestAccordionComponent]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    accordion = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
    console.log(fixture.nativeElement.innerHTML);
  });
  it("should render", () => {
    fixture.detectChanges();
    // debug component html
    console.log(fixture.nativeElement.innerHTML);
  });
});



