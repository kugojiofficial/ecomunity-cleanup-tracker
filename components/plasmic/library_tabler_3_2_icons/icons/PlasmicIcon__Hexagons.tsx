/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonsIcon(props: HexagonsIconProps) {
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
          "M4 18v-5l4-2 4 2v5l-4 2-4-2zm4-7V6l4-2 4 2v5m-4 2l4-2 4 2v5l-4 2-4-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonsIcon;
/* prettier-ignore-end */
