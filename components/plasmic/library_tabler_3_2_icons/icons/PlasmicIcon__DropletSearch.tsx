/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletSearchIcon(props: DropletSearchIconProps) {
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
          "M18.064 10.877l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.376 1.376 0 00-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.13 7.13 0 004.168 1.572M15 18a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletSearchIcon;
/* prettier-ignore-end */
