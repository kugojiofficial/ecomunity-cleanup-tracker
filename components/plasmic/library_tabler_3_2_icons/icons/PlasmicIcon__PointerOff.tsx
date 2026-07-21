/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointerOffIcon(props: PointerOffIconProps) {
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
          "M15.662 11.628l2.229-1.496a1.2 1.2 0 00-.309-2.228L9.569 5.601M4 4l3.904 13.563a1.2 1.2 0 002.228.308l2.09-3.093 4.907 4.907a1.066 1.066 0 001.509 0l.524-.524M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PointerOffIcon;
/* prettier-ignore-end */
