/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockPlusIcon(props: LockPlusIconProps) {
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
        d={"M12.5 21H7a2 2 0 01-2-2v-6a2 2 0 012-2h10a2 2 0 011.74 1.012"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 16a1 1 0 102 0 1 1 0 00-2 0zm-3-5V7a4 4 0 018 0v4m0 8h6m-3-3v6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LockPlusIcon;
/* prettier-ignore-end */
