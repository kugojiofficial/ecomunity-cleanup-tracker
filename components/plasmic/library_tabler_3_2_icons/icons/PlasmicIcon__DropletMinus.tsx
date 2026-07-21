/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletMinusIcon(props: DropletMinusIconProps) {
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
          "M18.946 15.083a6.539 6.539 0 00-.882-4.206l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.376 1.376 0 00-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.163 7.163 0 005.089 1.555M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletMinusIcon;
/* prettier-ignore-end */
