/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxModelOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxModelOffIcon(props: BoxModelOffIconProps) {
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
        d={"M12 8h4v4m0 4H8V8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 4h10a2 2 0 012 2v10m-.586 3.414A2 2 0 0118 20H6a2 2 0 01-2-2V6c0-.547.22-1.043.576-1.405M16 16l3.3 3.3M16 8l3.3-3.3M8 8L4.7 4.7M8 16l-3.3 3.3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxModelOffIcon;
/* prettier-ignore-end */
