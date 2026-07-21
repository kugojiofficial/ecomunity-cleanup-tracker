/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RobotOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RobotOffIcon(props: RobotOffIconProps) {
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
          "M8 4h8a2 2 0 012 2v4a2 2 0 01-2 2m-4 0H8a2 2 0 01-2-2V6m6-4v2m-3 8v9m6-6v6M5 16l4-2m0 4h6M14 8v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RobotOffIcon;
/* prettier-ignore-end */
