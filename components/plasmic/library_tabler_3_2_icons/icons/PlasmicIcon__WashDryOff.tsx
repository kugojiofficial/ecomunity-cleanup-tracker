/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WashDryOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WashDryOffIcon(props: WashDryOffIconProps) {
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
          "M20.116 20.127A2.99 2.99 0 0118 21H6a3 3 0 01-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 013 3v11M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WashDryOffIcon;
/* prettier-ignore-end */
