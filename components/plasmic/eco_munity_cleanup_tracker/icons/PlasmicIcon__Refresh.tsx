/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RefreshIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RefreshIcon(props: RefreshIconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M4.062 13A8 8 0 0 1 18.2 6.944M19.938 11q.062.492.062 1a8 8 0 0 1-14 5.292M9 17H6v.292M18.2 4v2.944m0 0V7h-3M6 20v-2.708"
        }
      ></path>
    </svg>
  );
}

export default RefreshIcon;
/* prettier-ignore-end */
