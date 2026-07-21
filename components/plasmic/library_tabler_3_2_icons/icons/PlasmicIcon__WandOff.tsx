/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WandOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WandOffIcon(props: WandOffIconProps) {
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
          "M10.5 10.5L3 18l3 3 7.5-7.5m2-2L21 6l-3-3-5.5 5.5M15 6l3 3M8.433 4.395C8.783 4.035 9 3.543 9 3a2 2 0 002 2c-.554 0-1.055.225-1.417.589m8.835 8.821c.36-.36.582-.86.582-1.41a2 2 0 002 2c-.555 0-1.056.226-1.419.59M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WandOffIcon;
/* prettier-ignore-end */
