import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoATextArea } from "./textarea";

let component: GoATextArea;
let fixture: ComponentFixture<GoATextArea>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoATextArea],
  });
  fixture = TestBed.createComponent(GoATextArea);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
