/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BasketOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BasketOffIcon(props: BasketOffIconProps) {
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
          "M17 10l-2-6m-8 6l.75-2.252m1.001-3.002L9 4m3 4h7a2 2 0 011.977 2.304C20.535 12.82 20.221 14.742 20 16m-1.01 3.003a2.997 2.997 0 01-2.234.997H7.244a3 3 0 01-2.965-2.544l-1.255-7.152A2 2 0 015.001 8H8m4 4a2 2 0 102 2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BasketOffIcon;
/* prettier-ignore-end */
