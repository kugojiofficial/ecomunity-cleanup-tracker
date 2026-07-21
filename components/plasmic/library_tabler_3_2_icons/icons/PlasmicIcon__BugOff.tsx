/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BugOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BugOffIcon(props: BugOffIconProps) {
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
          "M9.884 5.873A3 3 0 0115 8v1m-2 0h3a6 6 0 011 3v1m-.298 3.705A5 5 0 017 15v-3a6 6 0 011-3h1m-6 4h4m10 0h4m-9 7v-6m-8 5l3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BugOffIcon;
/* prettier-ignore-end */
