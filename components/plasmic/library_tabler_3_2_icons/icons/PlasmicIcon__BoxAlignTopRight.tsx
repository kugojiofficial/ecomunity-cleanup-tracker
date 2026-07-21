/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignTopRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignTopRightIcon(props: BoxAlignTopRightIconProps) {
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
          "M19 11.01h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1zm1 4V15m0 5.01V20m-5 .01V20m-6 .01V20M9 4.01V4M4 20.01V20m0-4.99V15m0-5.99V9m0-4.99V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignTopRightIcon;
/* prettier-ignore-end */
