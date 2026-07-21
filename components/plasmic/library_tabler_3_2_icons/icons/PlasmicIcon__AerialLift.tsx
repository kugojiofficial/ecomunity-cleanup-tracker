/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AerialLiftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AerialLiftIcon(props: AerialLiftIconProps) {
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
          "M4 5l16-2m-8 1v10m-7 0h14M6.894 8H17.2c2.45 3 2.45 9-.2 12H6.894c-2.544-3-2.544-9 0-12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AerialLiftIcon;
/* prettier-ignore-end */
