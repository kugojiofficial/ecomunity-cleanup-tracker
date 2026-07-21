/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAmongUsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAmongUsIcon(props: BrandAmongUsIconProps) {
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
          "M10.646 12.774c-1.939.396-4.467.317-6.234-.601-2.454-1.263-1.537-4.66 1.423-4.982 2.254-.224 3.814-.354 5.65.214.835.256 1.93.569 1.355 3.281-.191 1.067-1.07 1.904-2.194 2.088z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.84 7.132c.083-.564.214-1.12.392-1.661.456-.936 1.095-2.068 3.985-2.456a22.464 22.464 0 012.867.08c1.776.14 2.643 1.234 3.287 3.368.339 1.157.46 2.342.629 3.537v11l-12.704-.019c-.552-2.386-.262-5.894.204-8.481M17 10c.991.163 2.105.383 3.069.67.255.13.52.275.534.505.264 3.434.57 7.448.278 9.825H17"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAmongUsIcon;
/* prettier-ignore-end */
