import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAMicrositeHeader } from "./microsite-header";

let component: GoAMicrositeHeader;
let fixture: ComponentFixture<GoAMicrositeHeader>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAMicrositeHeader],
  });
  fixture = TestBed.createComponent(GoAMicrositeHeader);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});
