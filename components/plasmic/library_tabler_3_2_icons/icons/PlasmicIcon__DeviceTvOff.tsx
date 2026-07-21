/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceTvOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceTvOffIcon(props: DeviceTvOffIconProps) {
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
          "M11 7h8a2 2 0 012 2v8m-1.178 2.824c-.25.113-.529.176-.822.176H5a2 2 0 01-2-2V9a2 2 0 012-2h2m9-4l-4 4-4-4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceTvOffIcon;
/* prettier-ignore-end */
