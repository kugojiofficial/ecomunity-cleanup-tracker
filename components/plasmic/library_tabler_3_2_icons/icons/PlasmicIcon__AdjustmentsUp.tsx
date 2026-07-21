/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsUpIcon(props: AdjustmentsUpIconProps) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-6v4m0 4v8m7.927-4.538A2 2 0 1012 18m0-14v10m0 4v2m4-13a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m0 4v3m1 10v-6m3 3l-3-3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsUpIcon;
/* prettier-ignore-end */
