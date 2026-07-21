/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PerspectiveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PerspectiveIcon(props: PerspectiveIconProps) {
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
          "M6.141 4.163l12 1.714a1 1 0 01.859.99v10.266a1 1 0 01-.859.99l-12 1.714A1 1 0 015 18.847V5.153a1 1 0 011.141-.99z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PerspectiveIcon;
/* prettier-ignore-end */
