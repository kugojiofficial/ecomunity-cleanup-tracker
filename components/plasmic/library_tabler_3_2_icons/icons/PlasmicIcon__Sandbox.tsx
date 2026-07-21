/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SandboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SandboxIcon(props: SandboxIconProps) {
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
          "M19.953 8.017L21 15v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2l1.245-8.297A2 2 0 016.222 5H10M3 15h18M13 3l5.5 1.5m-2.75-.75l-2 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 10.5c1.667-.667 3.333-.667 5 0 1.667.667 3.333.667 5 0"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SandboxIcon;
/* prettier-ignore-end */
