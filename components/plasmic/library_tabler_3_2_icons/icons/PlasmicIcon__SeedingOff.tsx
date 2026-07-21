/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SeedingOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SeedingOffIcon(props: SeedingOffIconProps) {
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
          "M11.412 7.407a6.025 6.025 0 00-2.82-2.82M4 4H3v2a6 6 0 006 6h3m0 2c0-.588.085-1.173.255-1.736m1.51-2.514A5.98 5.98 0 0118 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3m0 5v-8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SeedingOffIcon;
/* prettier-ignore-end */
