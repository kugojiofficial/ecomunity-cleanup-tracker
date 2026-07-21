/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MugIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MugIcon(props: MugIconProps) {
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
          "M4.083 5h10.834A1.08 1.08 0 0116 6.077v8.615C16 17.072 14.06 19 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 014.083 5zM16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334C21 13.955 19.88 15 18.5 15H16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MugIcon;
/* prettier-ignore-end */
