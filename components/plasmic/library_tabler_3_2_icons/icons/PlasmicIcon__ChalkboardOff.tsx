/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChalkboardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChalkboardOffIcon(props: ChalkboardOffIconProps) {
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
          "M8 19H5a2 2 0 01-2-2V7a2 2 0 012-2m4 0h10a2 2 0 012 2v10m-4 0v1a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a1 1 0 011-1h4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChalkboardOffIcon;
/* prettier-ignore-end */
