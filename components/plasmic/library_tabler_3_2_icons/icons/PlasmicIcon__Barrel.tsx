/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarrelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarrelIcon(props: BarrelIconProps) {
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
          "M7.278 4h9.444a2 2 0 011.841 1.22C19.521 7.48 20 9.74 20 12c0 2.26-.479 4.52-1.437 6.78A2 2 0 0116.722 20H7.278a2 2 0 01-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.26.479-4.52 1.437-6.78A2 2 0 017.278 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 4c.667 2.667 1 5.333 1 8s-.333 5.333-1 8M10 4c-.667 2.667-1 5.333-1 8s.333 5.333 1 8m-5.5-4h15m0-8h-15"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarrelIcon;
/* prettier-ignore-end */
