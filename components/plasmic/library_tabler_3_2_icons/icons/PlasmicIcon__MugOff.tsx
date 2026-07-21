/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MugOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MugOffIcon(props: MugOffIconProps) {
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
          "M9 5h5.917A1.08 1.08 0 0116 6.077V12m-.167 3.88A4.33 4.33 0 0111.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 014.083 5H5m11 3h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.148-.89 2.103-2.06 2.297M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MugOffIcon;
/* prettier-ignore-end */
