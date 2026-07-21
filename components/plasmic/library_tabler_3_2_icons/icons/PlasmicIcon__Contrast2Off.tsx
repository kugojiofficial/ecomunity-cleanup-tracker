/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Contrast2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Contrast2OffIcon(props: Contrast2OffIconProps) {
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
        d={"M4 18h2a6 6 0 006-6m.878-3.126A6 6 0 0118 6h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 4h10a2 2 0 012 2v10m-.586 3.414A2 2 0 0118 20H6a2 2 0 01-2-2V6c0-.547.22-1.043.576-1.405M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Contrast2OffIcon;
/* prettier-ignore-end */
