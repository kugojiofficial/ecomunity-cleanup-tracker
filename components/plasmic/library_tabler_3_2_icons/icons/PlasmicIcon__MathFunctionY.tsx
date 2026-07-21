/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathFunctionYIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathFunctionYIcon(props: MathFunctionYIconProps) {
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
          "M3 19a2 2 0 002 2c2 0 2-4 3-9s1-9 3-9a2 2 0 012 2m-8 7h6m4 0l3 5.063M21 12l-4.8 9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathFunctionYIcon;
/* prettier-ignore-end */
