/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EggIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EggIcon(props: EggIconProps) {
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
          "M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3c3.5.007 7 5.545 7 11.083z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EggIcon;
/* prettier-ignore-end */
