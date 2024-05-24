import { Margins } from "@abgov/ui-components-common";
import { ReactNode } from "react";

interface WCProps extends Margins {
  heading: string;
  open?: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-details": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

/* eslint-disable-next-line */
export interface ABGovDetailsProps extends Margins {
  heading: string;
  open?: boolean;
  testId?: string;
  children: ReactNode;
}

export function ABGovDetails(props: ABGovDetailsProps) {
  return (
    <goa-details
      heading={props.heading}
      open={props.open}
      data-testid={props.testId}
      mt={props.mt}
      mr={props.mr}
      mb={props.mb}
      ml={props.ml}
    >
      {props.children}
    </goa-details>
  );
}

export default ABGovDetails;
