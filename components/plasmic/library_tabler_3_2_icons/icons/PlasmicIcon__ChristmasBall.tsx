/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChristmasBallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChristmasBallIcon(props: ChristmasBallIconProps) {
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
        d={"M4 13a8 8 0 1016 0 8 8 0 00-16 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 5l1-2 1 2m-8.488 5.161C7.008 9.056 9.504 9.336 12 11c2.627 1.752 5.255 1.97 7.882.653M4.315 15.252c2.561-1.21 5.123-.96 7.685.748 2.293 1.528 4.585 1.889 6.878 1.081"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChristmasBallIcon;
/* prettier-ignore-end */
