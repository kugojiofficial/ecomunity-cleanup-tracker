/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CellSignalOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CellSignalOffIcon(props: CellSignalOffIconProps) {
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
          "M20 20H4.731a.731.731 0 01-.517-1.249l7.265-7.264m2-2l5.272-5.272A.731.731 0 0120 4.732v11.269M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CellSignalOffIcon;
/* prettier-ignore-end */
