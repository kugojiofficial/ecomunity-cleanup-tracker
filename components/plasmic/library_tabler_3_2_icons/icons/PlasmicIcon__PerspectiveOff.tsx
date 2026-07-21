/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PerspectiveOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PerspectiveOffIcon(props: PerspectiveOffIconProps) {
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
          "M8.511 4.502l9.63 1.375a1 1 0 01.859.99V15m-.859 3.123l-12 1.714A1 1 0 015 18.847V5.153a1 1 0 01.01-.137M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PerspectiveOffIcon;
/* prettier-ignore-end */
