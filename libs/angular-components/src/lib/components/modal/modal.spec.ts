import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAModal } from "./modal";

let component: GoAModal;
let fixture: ComponentFixture<GoAModal>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAModal],
  });
  fixture = TestBed.createComponent(GoAModal);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
