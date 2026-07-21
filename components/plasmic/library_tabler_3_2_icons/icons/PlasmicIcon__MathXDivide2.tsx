/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathXDivide2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathXDivide2Icon(props: MathXDivide2IconProps) {
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
          "M10 15h3a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 00-1 1v1a1 1 0 001 1h3m-9-9h14M9 3l6 6M9 9l6-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathXDivide2Icon;
/* prettier-ignore-end */
