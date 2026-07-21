/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoadBalancerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoadBalancerIcon(props: LoadBalancerIconProps) {
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
          "M9 13a3 3 0 106 0 3 3 0 00-6 0zm2 7a1 1 0 102 0 1 1 0 00-2 0zm1-4v3m0-9V3M9 6l3-3 3 3m-3 4V3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 6l3-3 3 3m-.106 6.227l6.11-2.224M17.159 8.21l3.845 1.793-1.793 3.845m-10.11-1.634l-6.075-2.211M6.871 8.21l-3.845 1.793 1.793 3.845"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LoadBalancerIcon;
/* prettier-ignore-end */
