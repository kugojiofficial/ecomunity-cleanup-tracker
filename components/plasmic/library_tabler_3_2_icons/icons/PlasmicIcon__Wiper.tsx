/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WiperIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WiperIcon(props: WiperIconProps) {
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
          "M11 18a1 1 0 102 0 1 1 0 00-2 0zM3 9l5.5 5.5a5 5 0 017 0L21 9A12 12 0 003 9zm9 9L9.8 5.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WiperIcon;
/* prettier-ignore-end */
