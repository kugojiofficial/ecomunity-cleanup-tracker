/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsCheckIcon(props: AdjustmentsCheckIconProps) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-6v4m0 4v8m7.823-4.824a2 2 0 10-2.638 2.651M12 4v10m4-7a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m0 4v5m-3 5l2 2 4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsCheckIcon;
/* prettier-ignore-end */
