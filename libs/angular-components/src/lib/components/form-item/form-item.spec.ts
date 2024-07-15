import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoABFormItem } from "./form-item";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoABFormItemRequirement, Spacing } from "@abgov/ui-components-common";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <goab-form-item
      [label]="label"
      [requirement]="requirement"
      [error]="error"
      [helpText]="helpText"
      [id]="id"
      [testId]="testId"
      [mt]="mt"
      [mb]="mb"
      [mr]="mr"
      [ml]="ml"
    >
      <input data-testid="foo" />
      <div slot="error" *ngIf="errorSlot">This is an error slot</div>
      <div slot="helptext" *ngIf="helpTextSlot">This is a helpText slot</div>
    </goab-form-item>
  `,
})
class TestFormItemComponent {
  label?: string;
  requirement?: GoABFormItemRequirement;
  error?: string;
  helpText?: string;
  id?: string;
  testId?: string;
  errorSlot?: boolean;
  helpTextSlot?: boolean;
  mt?: Spacing;
  mb?: Spacing;
  mr?: Spacing;
  ml?: Spacing;
}

describe("GoABFormItem", () => {
  let fixture: ComponentFixture<TestFormItemComponent>;
  let component: TestFormItemComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestFormItemComponent],
      imports: [GoABFormItem],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestFormItemComponent);
    component = fixture.componentInstance;

    component.label = "First name";
    component.requirement = "optional";
    component.id = "firstName";
    component.testId = "foo";
    component.mt = "s";
    component.mb = "l";
    component.ml = "xl";
    component.mr = "m";
  });

  it("should render with properties", () => {
    component.error = "This is an error";
    component.helpText = "this is some helptext";
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css("goa-form-item")).nativeElement;

    expect(el?.getAttribute("label")).toBe(component.label);
    expect(el?.getAttribute("requirement")).toBe(component.requirement);
    expect(el?.getAttribute("error")).toBe(component.error);
    expect(el?.getAttribute("helptext")).toBe(component.helpText);
    expect(el?.getAttribute("id")).toBe(component.id);
    expect(el?.getAttribute("data-testid")).toBe(component.testId);
    expect(el?.getAttribute("mt")).toBe(component.mt);
    expect(el?.getAttribute("mb")).toBe(component.mb);
    expect(el?.getAttribute("mr")).toBe(component.mr);
    expect(el?.getAttribute("ml")).toBe(component.ml);

    // Children is rendered
    expect(el?.querySelector("input[data-testid='foo']")).toBeTruthy();
  });

  it("should render error and helpText slot", () => {
    component.errorSlot = true;
    component.helpTextSlot = true;
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css("goa-form-item")).nativeElement;
    expect(el?.querySelector("[slot='error']")).toBeTruthy();
    expect(el?.innerHTML).toContain("This is an error slot");
    expect(el?.querySelector("[slot='helptext']")).toBeTruthy();
    expect(el?.innerHTML).toContain("This is a helpText slot");
    expect(el?.querySelector("input[data-testid='foo']")).toBeTruthy();
  });
});
