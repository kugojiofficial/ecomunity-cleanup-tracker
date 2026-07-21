/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsOffIcon(props: AdjustmentsOffIconProps) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-4v2m0 4v8m4-4a2 2 0 104 0 2 2 0 00-4 0zm2-12v4m0 4v2m0 4v2m4-13a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m0 4v5m0 4v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsOffIcon;
/* prettier-ignore-end */
