/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletOffIcon(props: DropletOffIconProps) {
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
          "M18.963 14.938a6.54 6.54 0 00-.899-4.06l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.376 1.376 0 00-.41.397l-1.282 1.9M7.921 7.932l-1.986 2.946c-1.695 2.837-1.035 6.44 1.567 8.545 2.602 2.105 6.395 2.105 8.996 0a6.83 6.83 0 001.376-1.499M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletOffIcon;
/* prettier-ignore-end */
