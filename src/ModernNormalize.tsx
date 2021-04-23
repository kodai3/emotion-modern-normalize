import { Global, GlobalProps } from "@emotion/react";
import modernNormalizeCss from "./modernNormalizeCss";
import * as React from "react";

const ModernNormalize = (props: Partial<GlobalProps>) => (
  <Global styles={[modernNormalizeCss, props.styles]} />
);

export default ModernNormalize;
