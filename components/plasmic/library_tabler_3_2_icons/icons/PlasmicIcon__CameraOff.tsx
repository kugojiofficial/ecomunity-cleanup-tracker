/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraOffIcon(props: CameraOffIconProps) {
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
          "M8.297 4.289A.997.997 0 019 4h6a1 1 0 011 1 2 2 0 002 2h1a2 2 0 012 2v8m-1.187 2.828c-.249.11-.524.172-.813.172H5a2 2 0 01-2-2V9a2 2 0 012-2h1c.298 0 .58-.065.834-.181m3.588 3.629a3 3 0 104.15 4.098M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CameraOffIcon;
/* prettier-ignore-end */
