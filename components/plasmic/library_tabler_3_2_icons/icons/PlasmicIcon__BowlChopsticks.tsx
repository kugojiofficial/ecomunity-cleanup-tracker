/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BowlChopsticksIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BowlChopsticksIcon(props: BowlChopsticksIconProps) {
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
          "M4 11h16a1 1 0 011 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 011-1zm15-4L5 8m14-6L5 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BowlChopsticksIcon;
/* prettier-ignore-end */
