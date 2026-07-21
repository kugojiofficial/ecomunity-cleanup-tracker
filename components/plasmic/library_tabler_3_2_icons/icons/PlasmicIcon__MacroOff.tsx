/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MacroOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MacroOffIcon(props: MacroOffIconProps) {
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
          "M6 15a6 6 0 0011.47 2.467m-1.94-1.937A6 6 0 0012 21m0 0a6 6 0 00-6-6m6 6V11m-1.134-.13a5.007 5.007 0 01-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 01-2.604 4.389M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MacroOffIcon;
/* prettier-ignore-end */
