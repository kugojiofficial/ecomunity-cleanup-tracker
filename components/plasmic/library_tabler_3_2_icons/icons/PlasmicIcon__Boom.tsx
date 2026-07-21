/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoomIcon(props: BoomIconProps) {
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
          "M3 9.662C5 12 5 14 3 16c3 .5 4.5 1 5 4 2-3 6-4 9 0 0-3 1-4 4-4.004-2-1.997-2-3.995 0-5.996-3 0-5-2-5-5-2 4-5 3-7.5-1C8 7 6 9 3 9.662z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoomIcon;
/* prettier-ignore-end */
