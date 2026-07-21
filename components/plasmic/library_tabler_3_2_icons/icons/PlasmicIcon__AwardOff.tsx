/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AwardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AwardOffIcon(props: AwardOffIconProps) {
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
        d={"M16.72 12.704a6 6 0 00-8.433-8.418m-1.755 2.24a6 6 0 007.936 7.944"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 15l3.4 5.89 1.598-3.233.707.046m1.108-2.902l-1.617-2.8M6.802 12l-3.4 5.89L7 17.657l1.598 3.232 3.4-5.889M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AwardOffIcon;
/* prettier-ignore-end */
