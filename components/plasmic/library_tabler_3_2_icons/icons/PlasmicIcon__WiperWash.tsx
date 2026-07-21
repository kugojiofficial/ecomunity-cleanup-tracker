/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WiperWashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WiperWashIcon(props: WiperWashIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 20a1 1 0 102 0 1 1 0 00-2 0zm-8-9l5.5 5.5a5 5 0 017 0L21 11a12 12 0 00-18 0zm9 9V6M4 6a4 4 0 01.4-1.8M7 2.1a4 4 0 012 0M12 6a4 4 0 00-.4-1.8M12 6a4 4 0 01.4-1.8M15 2.1a4 4 0 012 0M20 6a4 4 0 00-.4-1.8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WiperWashIcon;
/* prettier-ignore-end */
