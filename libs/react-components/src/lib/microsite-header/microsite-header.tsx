import { GoALinkTarget, GoAServiceLevel } from "@abgov/common";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-microsite-header": WCProps &
      React.HTMLAttributes<HTMLElement>;
    }
  }
}

interface WCProps {
  type: GoAServiceLevel;
  version?: string;
  feedbackurl?: string;
  maxcontentwidth?: string;
  feedbackurltarget?: GoALinkTarget
  headerurltarget?: GoALinkTarget;
}

export interface GoAHeaderProps {
  type: GoAServiceLevel;
  version?: string;
  feedbackUrl?: string;
  testId?: string;
  maxContentWidth?: string;
  feedbackUrlTarget?: GoALinkTarget;
  headerUrlTarget?: GoALinkTarget;
}

export function GoAMicrositeHeader({
  type,
  version,
  feedbackUrl,
  maxContentWidth,
  feedbackUrlTarget,
  headerUrlTarget,
  testId,
}: GoAHeaderProps): JSX.Element {
  return (
    <goa-microsite-header
      type={type}
      version={version}
      feedbackurl={feedbackUrl}
      data-testid={testId}
      maxcontentwidth={maxContentWidth}
      feedbackurltarget={feedbackUrlTarget}
      headerurltarget={headerUrlTarget}
    />
  );
}

export default GoAMicrositeHeader;
