/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GenderTransgenderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GenderTransgenderIcon(props: GenderTransgenderIconProps) {
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
          "M8 12a4 4 0 108 0 4 4 0 00-8 0zm7-3l6-6m0 4V3h-4M9 9L3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GenderTransgenderIcon;
/* prettier-ignore-end */
