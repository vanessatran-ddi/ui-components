import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoARadioItem } from "./radio-item";

let component: GoARadioItem;
let fixture: ComponentFixture<GoARadioItem>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoARadioItem],
  });
  fixture = TestBed.createComponent(GoARadioItem);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
