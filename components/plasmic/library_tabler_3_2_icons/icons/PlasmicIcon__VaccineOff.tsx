/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VaccineOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VaccineOffIcon(props: VaccineOffIconProps) {
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
          "M17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1l-.5.5m-2 2l-4 4H6v-4l4-4m2-2l.5-.5m-5 5L9 14m-6 7l3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VaccineOffIcon;
/* prettier-ignore-end */
