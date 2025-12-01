// components/common/LordIcon.tsx
import React from "react";

type LordIconProps = {
  src: string;
  trigger?: string;
  stroke?: string;
  state?: string;
  colors?: string;
  style?: React.CSSProperties;
};

const LordIcon: React.FC<LordIconProps> = (props) => {
  return React.createElement("lord-icon", {
    ...props,
  });
};

export default LordIcon;
