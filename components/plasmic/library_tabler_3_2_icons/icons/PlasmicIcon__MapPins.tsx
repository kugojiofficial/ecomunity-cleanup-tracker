/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapPinsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapPinsIcon(props: MapPinsIconProps) {
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
          "M10.828 9.828a4 4 0 10-5.656 0L8 12.657l2.828-2.829zM8 7v.01m10.828 10.818a4.001 4.001 0 10-5.656 0L16 20.657l2.828-2.829zM16 15v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MapPinsIcon;
/* prettier-ignore-end */
