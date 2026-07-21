/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonsOffIcon(props: HexagonsOffIconProps) {
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
          "M4 18v-5l4-2 4 2v5l-4 2-4-2zm4-7V8m1.332-2.666L12 4l4 2v5m-4 2l.661-.331m2.684-1.341L16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonsOffIcon;
/* prettier-ignore-end */
