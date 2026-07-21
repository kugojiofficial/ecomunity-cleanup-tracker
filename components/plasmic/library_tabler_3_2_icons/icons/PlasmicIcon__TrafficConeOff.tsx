/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrafficConeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrafficConeOffIcon(props: TrafficConeOffIconProps) {
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
          "M4 20h16M9.4 10h.6m4 0h.6m-6.8 5H15m-9 5L9.5 9.5m1-3L11 5h2l2 6m2 6l1 3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrafficConeOffIcon;
/* prettier-ignore-end */
