import { GoAIconFilledType, GoAIconSize, GoAIconTheme, GoAIconType, Margins } from "@abgov/common";

interface IonIconProps {
  name: GoAIconType | GoAIconFilledType;
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

export interface GoAIconProps extends Margins {
  type: GoAIconType;
  size?: GoAIconSize;
  theme?: GoAIconTheme;
  testId?: string;
}

interface WCProps extends Margins {
  type: GoAIconType;
  theme?: GoAIconTheme;
  size?: GoAIconSize;
}

export function GoAIcon({
  type,
  theme,
  size,
  mt,
  mr,
  mb,
  ml,
  testId,
}: GoAIconProps): JSX.Element {
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
