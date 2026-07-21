/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsAltIcon(props: AdjustmentsAltIconProps) {
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
          "M4 8h4v4H4V8zm2-4v4m0 4v8m4-6h4v4h-4v-4zm2-10v10m0 4v2m4-15h4v4h-4V5zm2-1v1m0 4v11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsAltIcon;
/* prettier-ignore-end */
