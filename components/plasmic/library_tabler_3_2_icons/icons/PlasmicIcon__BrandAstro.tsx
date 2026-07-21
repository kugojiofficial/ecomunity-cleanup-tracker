/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAstroIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAstroIcon(props: BrandAstroIconProps) {
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
          "M14.972 3.483c.163.196.247.46.413.987L19.025 16a15.5 15.5 0 00-4.352-1.42l-2.37-7.723a.31.31 0 00-.478-.154.31.31 0 00-.113.155L9.37 14.576A15.5 15.5 0 005 15.998l3.657-11.53c.168-.527.251-.79.415-.986.144-.172.331-.306.544-.388C9.858 3 10.143 3 10.715 3h2.612c.572 0 .858 0 1.1.094.213.082.4.216.545.389zM9 18c0 1.5 2 3 3 4 1-1 3-3 3-4-2 1-4 1-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAstroIcon;
/* prettier-ignore-end */
