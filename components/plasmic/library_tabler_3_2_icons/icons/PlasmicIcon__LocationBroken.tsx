/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationBrokenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationBrokenIcon(props: LocationBrokenIconProps) {
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
          "M12.896 19.792L10 14l-7-3.5a.55.55 0 010-1L21 3l-3.487 9.657M21.5 21.5l-5-5m0 5l5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LocationBrokenIcon;
/* prettier-ignore-end */
