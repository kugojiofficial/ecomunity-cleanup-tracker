/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockOffIcon(props: LockOffIconProps) {
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
          "M15 11h2a2 2 0 012 2v2m0 4a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 16a1 1 0 102 0 1 1 0 00-2 0zm-3-5V8m.719-3.289A4 4 0 0116 7v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LockOffIcon;
/* prettier-ignore-end */
