/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationOffIcon(props: LocationOffIconProps) {
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
          "M10.72 6.712L21 3l-3.724 10.313m-1.056 2.925L14.5 21a.55.55 0 01-1 0L10 14l-7-3.5a.55.55 0 010-1l4.775-1.724M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LocationOffIcon;
/* prettier-ignore-end */
