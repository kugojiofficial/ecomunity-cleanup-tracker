/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ViewfinderOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ViewfinderOffIcon(props: ViewfinderOffIconProps) {
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
          "M5.65 5.623a9 9 0 1012.71 12.745m1.684-2.328A9 9 0 007.95 3.96M12 3v4m0 14v-3m-9-6h4m14 0h-3m-6 0v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ViewfinderOffIcon;
/* prettier-ignore-end */
