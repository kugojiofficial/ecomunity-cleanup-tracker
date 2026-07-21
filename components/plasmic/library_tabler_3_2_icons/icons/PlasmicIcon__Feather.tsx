/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FeatherIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FeatherIcon(props: FeatherIconProps) {
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
        d={"M4 20l10-10m0 0V5l-4 4m4 1h5m-9-1v5h5m-5-5l-4 4v5h5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 5c.636-.633 1.513-1 2.483-1A3.515 3.515 0 0120 7.514c0 .971-.362 1.85-1 2.486l-4 4-4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FeatherIcon;
/* prettier-ignore-end */
