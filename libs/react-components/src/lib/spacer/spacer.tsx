import { GoASpacerHorizontalSpacing, GoASpacerVerticalSpacing } from "@abgov/common";

/* eslint-disable-next-line */
interface WCProps {
  hspacing?: GoASpacerHorizontalSpacing;
  vspacing?: GoASpacerVerticalSpacing;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-spacer": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

/* eslint-disable-next-line */
export interface GoASpacerProps {
  hSpacing?: GoASpacerHorizontalSpacing;
  vSpacing?: GoASpacerVerticalSpacing;
  testId?: string;
}

export function GoASpacer(props: GoASpacerProps) {
  return (
    <goa-spacer
      hspacing={props.hSpacing}
      vspacing={props.vSpacing}
      data-testid={props.testId}
    />
  );
}

export default GoASpacer;
