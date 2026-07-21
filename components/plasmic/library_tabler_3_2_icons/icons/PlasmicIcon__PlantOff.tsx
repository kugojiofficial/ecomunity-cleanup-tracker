/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlantOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlantOffIcon(props: PlantOffIconProps) {
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
          "M17 17v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-4h8m-3.1-7.092a6 6 0 00-4.79-4.806M3 3v2a6 6 0 006 6h2m1.531-2.472A6 6 0 0118 5h3v1a6 6 0 01-5.037 5.923M12 15v-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlantOffIcon;
/* prettier-ignore-end */
