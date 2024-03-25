import { GoASpinnerSize, GoASpinnerType } from "@abgov/common";

interface WCProps {
  size: GoASpinnerSize;
  type: GoASpinnerType;
  invert?: boolean;
  progress?: number;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-spinner": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface GoASpinnerProps {
  type: GoASpinnerType;
  size: GoASpinnerSize;
  invert?: boolean;
  progress?: number;
  testId?: string;
}

export type SpinnerProps = GoASpinnerProps;

export function GoASpinner({
  type,
  size,
  progress,
  invert,
  testId,
}: GoASpinnerProps): JSX.Element {
  return (
    <goa-spinner
      type={type}
      size={size}
      progress={progress}
      invert={invert}
      data-testid={testId}
    />
  );
}

export default GoASpinner;
