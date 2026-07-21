/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadarOffIcon(props: RadarOffIconProps) {
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
          "M11.291 11.295A1 1 0 0012 13v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.319A8.962 8.962 0 0021 12h-5m0-3a5 5 0 00-5.063-1.88M8.471 8.467a5 5 0 00.53 7.535"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.486 9A9 9 0 007.961 3.968M5.644 5.643a9 9 0 003.36 14.852M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RadarOffIcon;
/* prettier-ignore-end */
