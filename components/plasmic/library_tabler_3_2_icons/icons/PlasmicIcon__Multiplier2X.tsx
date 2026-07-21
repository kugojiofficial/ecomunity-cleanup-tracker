/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Multiplier2XIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Multiplier2XIcon(props: Multiplier2XIconProps) {
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
          "M14 16l4-4m0 4l-4-4m-8-2a2 2 0 114 0c0 .591-.417 1.318-.816 1.858L6 16.001h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Multiplier2XIcon;
/* prettier-ignore-end */
