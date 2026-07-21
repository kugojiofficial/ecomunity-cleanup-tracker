/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DirectionSignOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DirectionSignOffIcon(props: DirectionSignOffIconProps) {
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
          "M18.73 14.724l1.949-1.95a1.095 1.095 0 000-1.548l-7.905-7.905a1.095 1.095 0 00-1.548 0l-1.95 1.95m-2.01 2.01l-3.945 3.945a1.095 1.095 0 000 1.548l7.905 7.905c.427.428 1.12.428 1.548 0l3.95-3.95M8 12h4m1.748 1.752L12 15.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DirectionSignOffIcon;
/* prettier-ignore-end */
