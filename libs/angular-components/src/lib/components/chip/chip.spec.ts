import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoABChip } from "./chip";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoABIconType, Spacing } from "@abgov/ui-components-common";
import { By } from "@angular/platform-browser";
import { fireEvent } from "@testing-library/dom";

@Component({
  template: `
    <goab-chip
      [leadingIcon]="leadingIcon"
      [error]="error"
      [deletable]="deletable"
      [content]="content"
      [testId]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
      (onClick)="onClick()"
    >
    </goab-chip>
  `,
})
class TestChipComponent {
  leadingIcon?: GoABIconType | null;
  error?: boolean;
  deletable?: boolean;
  content?: string;
  testId?: string;
  mt?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mr?: Spacing;

  onClick() {
    /* do nothing */
  }
}

describe("GoABChip", () => {
  let fixture: ComponentFixture<TestChipComponent>;
  let component: TestChipComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoABChip],
      declarations: [TestChipComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestChipComponent);
    component = fixture.componentInstance;

    component.leadingIcon = "add";
    component.error = true;
    component.deletable = true;
    component.content = "some chip";
    component.testId = "chip-test";
    component.mt = "s";
    component.mr = "m";
    component.mb = "l";
    component.ml = "xl";
    fixture.detectChanges();
  });

  it("should render properties", () => {
    const chipElement = fixture.debugElement.query(By.css("goa-chip")).nativeElement;
    expect(chipElement.getAttribute("leadingIcon")).toBe(component.leadingIcon);
    expect(chipElement.getAttribute("error")).toBe(`${component.error}`);
    expect(chipElement.getAttribute("deletable")).toBe(`${component.deletable}`);
    expect(chipElement.getAttribute("data-testid")).toBe(component.testId);
    expect(chipElement.getAttribute("mt")).toBe(component.mt);
    expect(chipElement.getAttribute("mr")).toBe(component.mr);
    expect(chipElement.getAttribute("mb")).toBe(component.mb);
    expect(chipElement.getAttribute("ml")).toBe(component.ml);
  });

  it("should allow to handle delete event", async () => {
    const onClick = jest.spyOn(component, "onClick");
    const chipElement = fixture.debugElement.query(By.css("goa-chip")).nativeElement;
    fireEvent(chipElement, new CustomEvent("_click"));

    expect(onClick).toHaveBeenCalled();
  });
});