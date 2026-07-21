/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DetailsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DetailsIcon(props: DetailsIconProps) {
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
          "M11.999 3L12 20M10.363 3.591L2.257 17.125a1.914 1.914 0 001.636 2.871h16.214a1.914 1.914 0 001.636-2.87L13.637 3.59a1.913 1.913 0 00-3.274 0v.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DetailsIcon;
/* prettier-ignore-end */
