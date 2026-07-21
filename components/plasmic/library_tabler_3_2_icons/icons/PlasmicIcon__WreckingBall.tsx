/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WreckingBallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WreckingBallIcon(props: WreckingBallIconProps) {
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
          "M17 13a2 2 0 104 0 2 2 0 00-4 0zM2 17a2 2 0 104 0 2 2 0 00-4 0zm9 0a2 2 0 104 0 2 2 0 00-4 0zm2 2H4m0-4h9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 12V7h2a3 3 0 013 3v5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 15v-2a1 1 0 011-1h7m6-1V4l-6 7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WreckingBallIcon;
/* prettier-ignore-end */
