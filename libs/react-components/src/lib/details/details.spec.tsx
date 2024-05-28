import { render } from "@testing-library/react";

import { GoABDetails } from "./details";

describe("Detail", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <GoABDetails heading="The heading" open={true}>
        The content
      </GoABDetails>,
    );

    const el = baseElement.querySelector("goa-details");
    expect(el?.getAttribute("heading")).toBe("The heading");
    expect(baseElement.innerHTML).toContain("The content");
    expect(el?.getAttribute("open")).toBe("true");
  });
});
