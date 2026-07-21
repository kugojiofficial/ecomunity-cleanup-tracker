/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareToggleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareToggleIcon(props: SquareToggleIconProps) {
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
          "M12 2v20m2-2H6a2 2 0 01-2-2V6a2 2 0 012-2h8m6 2a2 2 0 00-2-2m0 16a2 2 0 002-2m0-8v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SquareToggleIcon;
/* prettier-ignore-end */
