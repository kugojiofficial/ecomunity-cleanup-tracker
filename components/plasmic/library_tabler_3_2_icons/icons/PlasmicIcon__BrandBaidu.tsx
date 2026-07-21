/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBaiduIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBaiduIcon(props: BrandBaiduIconProps) {
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
          "M4 9.5c0 .398.105.78.293 1.06.187.282.442.44.707.44.265 0 .52-.158.707-.44.188-.28.293-.662.293-1.06s-.105-.78-.293-1.06C5.52 8.157 5.265 8 5 8c-.265 0-.52.158-.707.44C4.105 8.72 4 9.101 4 9.5zm10.463 2.096c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574.593 3.636C17.204 20.711 13.64 19.8 13.64 19.8s-1.416-.44-3.06-.088c-1.644.356-3.06.22-3.06.22s-2.055-.22-2.47-2.304c-.416-2.084 1.918-3.638 2.102-3.858.182-.222 1.409-.966 2.284-2.394.875-1.428 3.337-2.287 5.027.221v-.001zM8 4.5c0 .398.105.78.293 1.06.187.282.442.44.707.44.265 0 .52-.158.707-.44.188-.28.293-.662.293-1.06s-.105-.78-.293-1.06C9.52 3.157 9.265 3 9 3c-.265 0-.52.158-.707.44C8.105 3.72 8 4.101 8 4.5zm6 0c0 .398.105.78.293 1.06.187.282.442.44.707.44.265 0 .52-.158.707-.44.188-.28.293-.662.293-1.06s-.105-.78-.293-1.06C15.52 3.157 15.265 3 15 3c-.265 0-.52.158-.707.44-.188.28-.293.662-.293 1.06zm4 5c0 .398.105.78.293 1.06.187.282.442.44.707.44.265 0 .52-.158.707-.44.188-.28.293-.662.293-1.06s-.105-.78-.293-1.06C19.52 8.157 19.265 8 19 8c-.265 0-.52.158-.707.44-.188.28-.293.662-.293 1.06z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBaiduIcon;
/* prettier-ignore-end */
