/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PigOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PigOffIcon(props: PigOffIconProps) {
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
          "M15 11v.01M10 6h1.499l4.5-3v3.803A6.019 6.019 0 0118.657 10h1.341a1 1 0 011 1v2a1 1 0 01-1 1h-1.342c-.057.16-.12.318-.19.472M16.999 17v1.5a1.5 1.5 0 11-3 0v-.583c-.33.055-.665.083-1 .083h-4c-.335 0-.67-.028-1-.083v.583a1.5 1.5 0 01-3 0v-2.027a6 6 0 011.5-9.928M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PigOffIcon;
/* prettier-ignore-end */
