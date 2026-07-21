/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RollerSkatingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RollerSkatingIcon(props: RollerSkatingIconProps) {
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
          "M5.905 5h3.418a1 1 0 01.928.629l1.143 2.856a3 3 0 002.207 1.83l4.717.926A2.084 2.084 0 0120 13.286V14a1 1 0 01-1 1H5.105a1 1 0 01-1-1.1l.8-8a1 1 0 011-.9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 17a2 2 0 104 0 2 2 0 00-4 0zm8 0a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RollerSkatingIcon;
/* prettier-ignore-end */
