import {
  GoABIconFilledType,
  GoABIconSize,
  GoABIconTheme,
  GoABIconType,
  Margins,
} from "@abgov/ui-components-common";

interface IonIconProps {
  name: GoABIconType | GoABIconFilledType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IonIconElement extends HTMLElement {}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "ion-icon": IonIconProps & React.HTMLAttributes<IonIconElement>;
    }
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-icon": WCProps & React.HTMLAttributes<IonIconElement>;
    }
  }
}

export interface GoABIconProps extends Margins {
  type: GoABIconType;
  size?: GoABIconSize;
  theme?: GoABIconTheme;
  testId?: string;
}

interface WCProps extends Margins {
  type: GoABIconType;
  theme?: GoABIconTheme;
  size?: GoABIconSize;
}

export function GoABIcon({
  type,
  theme,
  size,
  mt,
  mr,
  mb,
  ml,
  testId,
}: GoABIconProps): JSX.Element {
  return (
    <goa-icon
      type={type}
      theme={theme}
      size={size}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      data-testid={testId}
    />
  );
}
