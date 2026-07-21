/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionTopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionTopIcon(props: TransitionTopIconProps) {
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
          "M21 6a3 3 0 00-3-3H6a3 3 0 00-3 3m3 15h12a3 3 0 000-6H6a3 3 0 000 6zm6-6V7m-3 3l3-3 3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransitionTopIcon;
/* prettier-ignore-end */
