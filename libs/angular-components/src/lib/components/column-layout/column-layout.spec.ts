import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAColumnLayout } from "./column-layout";

let component: GoAColumnLayout;
let fixture: ComponentFixture<GoAColumnLayout>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAColumnLayout],
  });
  fixture = TestBed.createComponent(GoAColumnLayout);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
