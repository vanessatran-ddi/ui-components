import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoABAppHeaderMenu } from "./header-menu";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoABIconType } from "@abgov/ui-components-common";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <goab-app-header-menu
      [heading]="heading"
      [leadingIcon]="leadingIcon"
      [testId]="testId"
    >
      <a href="#">Home</a>
    </goab-app-header-menu>
  `,
})
class TestAppHeaderMenuComponent {
  heading = "Test heading";
  leadingIcon?: GoABIconType;
  testId?: string;
}

describe("GoABAppHeaderMenu", () => {
  let fixture: ComponentFixture<TestAppHeaderMenuComponent>;
  let component: TestAppHeaderMenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAppHeaderMenuComponent],
      imports: [GoABAppHeaderMenu],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestAppHeaderMenuComponent);
    component = fixture.componentInstance;

    component.leadingIcon = "accessibility";
    component.testId = "foo";

    fixture.detectChanges();
  });

  it("should render", () => {
    const el = fixture.debugElement.query(By.css("goa-app-header-menu")).nativeElement;

    expect(el?.getAttribute("heading")).toBe(component.heading);
    expect(el?.getAttribute("leadingicon")).toBe(component.leadingIcon);
    expect(el?.getAttribute("data-testid")).toBe(component.testId);
    expect(el?.innerHTML).toContain("Home");
  });
});
