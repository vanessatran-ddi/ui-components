import { GoAFormStepStatus } from "@abgov/common";

interface WCProps {
  text: string;
  status?: GoAFormStepStatus;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-form-step": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface GoAFormStepProps {
  text: string;
  status?: GoAFormStepStatus;
}

export function GoAFormStep(props: GoAFormStepProps) {
  return <goa-form-step text={props.text} status={props.status} />;
}

export default GoAFormStep;
