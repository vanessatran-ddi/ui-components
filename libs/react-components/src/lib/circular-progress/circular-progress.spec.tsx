import { render, waitFor } from "@testing-library/react";

import { GoABCircularProgress, CircularProgressVariant } from "./circular-progress";

describe("CircularProgress", () => {
  it("does not render anything when not visible", async () => {
    const { baseElement } = render(
      <GoABCircularProgress
        variant="inline"
        message="the message"
        visible={false}
        size="small"
      />,
    );
    const el = baseElement.querySelector("goa-circular-progress");
    expect(el?.innerHTML).toBeFalsy();
  });

  (["fullscreen", "inline"] as const).forEach((variant: CircularProgressVariant) => {
    [-1, 50].forEach((progress: number) => {
      it(`renders the ${variant} variant`, async () => {
        const { baseElement } = render(
          <GoABCircularProgress
            progress={progress}
            variant={variant}
            message="the message"
            visible={true}
          />,
        );
        const el = baseElement.querySelector("goa-circular-progress");
        await waitFor(() => {
          expect(el?.getAttribute("progress")).toBe(`${progress}`);
          expect(el?.getAttribute("message")).toBe("the message");
          expect(el?.getAttribute("variant")).toBe(variant);
        });
      });
    });
  });
});
